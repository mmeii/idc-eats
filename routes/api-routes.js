const express = require("express");
const yelp = require("../api/yelp");
const router = express.Router();
const db = require("../models");
const requireLogin = require("../middlewares/requireLogin");

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

router.use(requireLogin);

router.get("/api/restaurants/:lat/:long/", async (req, res) => {
	const user = req.user.dataValues;
	let priceOptions = req.query.price;
<<<<<<< HEAD
	if (!priceOptions.length) {
		priceOptions = "1, 2, 3, 4";
=======
	if (!priceOptions) {
		priceOptions = [1, 2, 3, 4];
>>>>>>> e2e1713b03e480b77b23306dac323ed4481b7a27
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
		dietPreferences =
			user.dataValues.Preference[0].Category.dataValues.yelp_category;
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

// Post User Preferences
router.post("/api/preferences", async (req, res) => {
	//req.user
	try {
		const user = req.user;
		const preferences = req.body.preferences;

		const currentPreferences = await db.Preference.destroy({
			where: {
				UserId: user.id,
			},
		});

		for (let preference of preferences) {
			if (preference.selected) {
				db.Preference.create({
					UserId: user.id,
					CategoryId: preference.categoryId,
				});
			}
		}
	} catch (error) {
		console.log(error);
	}
});

// Post User Preferences
router.get("/api/preferences", async (req, res) => {
	try {
		const user = req.user;
		const preferences = db.Preference.findAll({
			where: {
				UserId: user.id,
			},
		});
		const categories = db.Category.findAll().map(category => ({
			categoryId: category.id,
			displayName: category.display_category,
			selected: preferences.some(p => p.CategoryId == category.id),
		}));
		res.json(categories);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
