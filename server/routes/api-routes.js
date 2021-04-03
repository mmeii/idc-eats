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
			weight: weight.dataValues.value,
			category: weight.dataValues.Category.dataValues.yelp_category,
		};
	});

	const category = randomCategory(mappedWeights);

	let dietPreferences;
	if (user.Preference.length) {
		dietPreferences = user.Preference[0].Category.dataValues.yelp_category;
	}

	try {
		const restaurants = await yelp.get("/search", {
			params: {
				latitude: lat,
				longitude: long,
				limit: 50,
				categories: dietPreferences,
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

			res.json(randomRestaurant);
		} else {
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
<<<<<<< HEAD
		// console.log(displayCategory);
=======

>>>>>>> 896faa242450a55680827c9316be891fdfacc7f5
		res.json(displayCategory);
	} catch (error) {
		console.log(error);
	}
});

// Post User Preferences
router.post("/api/preferences", async (req, res) => {
<<<<<<< HEAD
	// console.log(req.user.dataValues);
=======
	//req.user

>>>>>>> 896faa242450a55680827c9316be891fdfacc7f5
	try {
		const user = req.user.dataValues;
		const selection = Object.values(req.body);
		const preferences = [];
<<<<<<< HEAD
		
		function getPreferences() {
=======

		function what() {
>>>>>>> 896faa242450a55680827c9316be891fdfacc7f5
			for (let i = 0; i < selection.length; i++) {
				preferences.push(Number(selection[i]));
			}
		}

<<<<<<< HEAD
		getPreferences();
	
=======
		what();

>>>>>>> 896faa242450a55680827c9316be891fdfacc7f5
		const currentPreferences = await db.Preference.destroy({
			where: {
				UserId: user.id,
			},
		});

<<<<<<< HEAD
		// console.log('req.body: ' + require('util').inspect(req.body));
=======
		console.log("req.body: " + require("util").inspect(req.body));
>>>>>>> 896faa242450a55680827c9316be891fdfacc7f5
		console.log(preferences);

		for (let preference of preferences) {
			if (preference) {
				await db.Preference.create({
					UserId: user.id,
					CategoryId: preference,
				});
			}
		}
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
						weight.increment("value", { by: 5 });
					} else {
						weight.decrement("value", { by: 3 });
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
