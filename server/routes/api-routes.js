const express = require("express");
const yelp = require("../api/yelp");
const router = express.Router();
const db = require("../models");

const randomCategory = weights => {
	let totalWeight = 0;

	weights.forEach(weight => {
		totalWeight += weight.weight;
	});

	let randomValue = Math.floor(Math.random() * totalWeight);
	for (let i = 0; i < weights.length; i++) {
		randomValue -= weights[i].weight;

		if (randomValue < 0) {
			return weights[i].category;
		}
	}
};

router.get("/api/restaurants/:lat/:long/", async (req, res) => {
	const user = req.user.dataValues;
	let priceOptions = req.query.price;
	if (!priceOptions.length) {
		priceOptions = "1, 2, 3, 4";
	}
	const lat = req.params.lat;
	const long = req.params.long;

	const weights = await db.Weight.findAll({
		where: { UserId: user.id },
		include: db.Category,
	});

	const mappedWeights = weights.map(weight => {
		return {
			categoryId: weight.dataValues.CategoryId,
			weight: weight.dataValues.value,
			category: weight.dataValues.Category.dataValues.yelp_category,
		};
	});

	let dietPreferences;
	let dietRestriction;
	if (user.Preference.length) {
		const filteredRestriction = user.Preference.filter(
			preference => preference.dataValues.Category.dataValues.TypeId === 1
		);

		if (filteredRestriction.length) {
			dietRestriction =
				filteredRestriction[0].dataValues.Category.dataValues.yelp_category;
		}

		const filteredPreferences = user.Preference.filter(
			preference => preference.dataValues.Category.dataValues.TypeId === 2
		);

		dietPreferences = filteredPreferences.map(preference => {
			return {
				id: preference.dataValues.CategoryId,
				category: preference.dataValues.Category.dataValues.yelp_category,
			};
		});
	}

	let category;
	if (dietPreferences && dietPreferences.length) {
		const filteredWeights = mappedWeights.filter(weight => {
			return dietPreferences.find(
				preference => weight.categoryId === preference.id
			);
		});

		category = randomCategory(filteredWeights);
	} else {
		category = randomCategory(mappedWeights);
	}

	try {
		if (dietRestriction) {
			const restaurants = await yelp.get("/search", {
				params: {
					latitude: lat,
					longitude: long,
					limit: 50,
					categories: dietRestriction,
					price: priceOptions,
				},
			});

			const matchingRestaurants = restaurants.data.businesses.filter(
				restaurant => {
					return restaurant.categories.find(c => {
						return category.includes(c.alias);
					});
				}
			);
			if (matchingRestaurants.length) {
				const randomIndex = Math.floor(
					Math.random() * matchingRestaurants.length
				);
				randomRestaurant = matchingRestaurants[randomIndex];
				return res.json(randomRestaurant);
			} else {
				const randomIndex = Math.floor(
					Math.random() * restaurants.data.businesses.length
				);
				randomRestaurant = restaurants.data.businesses[randomIndex];
				return res.json(randomRestaurant);
			}
		} else {
			const restaurants = await yelp.get("/search", {
				params: {
					latitude: lat,
					longitude: long,
					limit: 50,
					categories: category,
					price: priceOptions,
				},
			});

			const randomIndex = Math.floor(
				Math.random() * restaurants.data.businesses.length
			);
			randomRestaurant = restaurants.data.businesses[randomIndex];
			res.json(randomRestaurant);
		}
	} catch (e) {
		res.status(500).send(e);
	}
});

// Get User Preferences
router.get("/api/preferences", async (req, res) => {
	const user = req.user.dataValues;

	try {
		const preferences = await db.Preference.findAll({
			where: {
				UserId: user.id,
			},
		});
		// console.log(preferences[0].CategoryId, preferences[0].UserId);
		// console.log(typeof preferences);
		const categories = await db.Category.findAll();
		// console.log(categories);
		const displayCategory = categories.map(category => ({
			categoryId: category.id,
			displayName: category.display_category,
			categoryType: category.TypeId,
			selected: preferences.some(p => p.CategoryId == category.id),
		}));
		res.json(displayCategory);
	} catch (error) {
		console.log(error);
	}
});

// Post User Preferences
router.post("/api/preferences", async (req, res) => {
	// console.log(req.user.dataValues);
	try {
		const user = req.user.dataValues;
		const preferences = Object.values(req.body).map(category =>
			Number(category)
		);
		// const preferences = [];

		// function getPreferences() {
		// 	for (let i = 0; i < selection.length; i++) {
		// 		preferences.push(Number(selection[i]));
		// 	}
		// }

		// getPreferences();

		const currentPreferences = await db.Preference.destroy({
			where: {
				UserId: user.id,
			},
		});

		// console.log("req.body: " + require("util").inspect(req.body));
		console.log(preferences);

		for (let preference of preferences) {
			if (preference) {
				await db.Preference.create({
					UserId: user.id,
					CategoryId: preference,
				});
			}
		}
		res.send();
	} catch (error) {
		console.log(error);
	}
});

router.patch("/api/weights/:type", async (req, res) => {
	// Category represent food category
	// Type represents 'increment' or 'decrement'
	const user = req.user.dataValues;
	const categories = req.body;
	const type = req.params.type;

	try {
		const dbCategories = await db.Category.findAll({ where: { TypeId: 2 } });

		const yelpCategories = dbCategories.map(
			category => category.dataValues.yelp_category
		);

		const trackedYelpCategories = [];

		categories.forEach(category => {
			yelpCategories.forEach(async yelpCategory => {
				if (
					yelpCategory.includes(category.alias) &&
					!trackedYelpCategories.includes(yelpCategory)
				) {
					trackedYelpCategories.push(yelpCategory);
					const queriedCategory = await db.Category.findOne({
						where: { yelp_category: yelpCategory },
					});

					var weight = await db.Weight.findOne({
						where: {
							UserId: user.id,
							CategoryId: queriedCategory.dataValues.id,
						},
					});

					if (type === "increment") {
						if (weight.dataValues.value < 100) {
							weight.increment("value", { by: 10 });
						}
					} else {
						if (weight.dataValues.value > 5) {
							weight.decrement("value", { by: 5 });
						}
					}
				}
			});
		});

		res.send();
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
