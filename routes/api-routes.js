const express = require("express");
const yelp = require("../api/yelp");
const router = express.Router();
const db = require("../models");
const user = require("../models/user");

const randomCategory = (weights) => {
	let totalWeight = 0;

	weights.forEach(weight => {
		totalWeight += weight.value;
	});

	let randomValue = Math.floor(Math.random() * totalWeight);

	for (let i = 0; i < weights.length; i++) {
		randomValue -= weights[i];

		if (randomValue < 0) {
			return weights[i].Category;
		}
	}
};

router.get("/api/restaurants/:lat/:long/", async (req, res) => {
	// /api/restaurants/${coords.latitude}/${coords.longitude}
	// Pull price and diet options from query string of the request
	const priceOptions = req.query.price;
	// const dietPreferences = req.query.diet;
	const lat = req.params.lat;
	const long = req.params.long;
	console.log(lat, long)
	// Need to add weights and categories still
	const weights = await db.Weight.findAll({ include: db.Category })

	console.log(weights[0].Category.display_category)
	// console.log(weights)
	// const categories = 
	const user = await db.User.findAll({ where: { id: 1 }})
	const category = randomCategory(weights);

	// const urlString = `?latitude=${lat}&longitude=${long}`;

	// if (priceOptions) {
	// 	urlString += `&price=${priceOptions}`;
	// }

	if (user.Preference.length) {
		const dietPreferences = user.Preference[0]
		urlString += `&price=${priceOptions}&categories=${dietPreferences.Category.yelp_category}`;
	} else {
		urlString += `&price=${priceOptions}&categories=${category}`;
	}

	try {
		const restaurants = await yelp(urlString);

		if (user.Preference.length) {
			const matching =
			  	restaurants.filter((r) =>
					r.categories.find((c) => c.alias === category)
				)
		}

		const randomIndex = Math.floor(
			Math.random() * restaurants.businesses.length + 1
		);

		let randomRestaurant = null;
		if (restaurants.length) {

		
		    randomRestaurant = restaurants[randomIndex];
		}
		res.json(randomRestaurant);
	} catch (e) {
		res.status(500).send(e);
	}
});

// Post User Preferences
// router.post("/api/preferences", async (req, res) => {
// 	//req.user
// 	const user = req.user;
// 	const preferences = req.body.preferences;

// 	const currentPreferences = db.Preference.destroy({
// 		where: {
// 			UserId: user.id
// 		}
// 	})

// 	for (let preference of preferences) {
// 		if (preference.selected) {
// 			db.Preference.create({
// 				user_id: user.id,
// 				CategoryId: preference.categoryId
// 			})
// 		}
// 	}
// });

// Post User Preferences
// router.get("/api/preferences", async (req, res) => {
// 	const user = req.user;
// 	const preferences = db.Preference.findAll({
// 		where: {
// 			UserId: user.id
// 		}
// 	});
// 	const categories = db.Category.findAll().map(category =>
// 		({
// 			categoryId: category.id,
// 			displayName: category.display_category,
// 			selected: preferences.some(p => p.CategoryId == category.id)
// 		})
// 	);
// 	res.json(categories)
// });

module.exports = router;
