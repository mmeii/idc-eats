const express = require("express");
const yelp = require("../api/yelp");
const router = express.Router();

const randomCategory = (weights, categories) => {
	const totalWeight = 0;

	weights.forEach(weight => {
		totalWeight += weight;
	});

	const randomValue = Math.floor(Math.random() * totalWeight);

	for (let i = 0; i < categories.length; i++) {
		randomValue -= weights[i];

		if (randomValue < 0) {
			return categories[i];
		}
	}
};

router.get("/api/restaurants/:lat/:long/", async (req, res) => {
	// Pull price and diet options from query string of the request
	const priceOptions = req.query.price;
	const dietPreferences = req.query.diet;
	const lat = req.params.lat;
	const long = req.params.long;
	// Need to add weights and categories still
	// const weight =
	// const categories =

	const category = randomCategory(weight, categories);

	const urlString = `?latitude=${lat}&longitude=${long}`;

	if (priceOptions) {
		urlString += `&price=${priceOptions}`;
	}

	if (dietPreferences) {
		urlString += `&price=${priceOptions}&categories=${category},${dietPreferences}`;
	} else {
		urlString += `&price=${priceOptions}&categories=${category}`;
	}

	try {
		const restaurants = await yelp(urlString);

		const randomIndex = Math.floor(
			Math.random() * restaurants.businesses.length + 1
		);

		const randomRestaurant = restaurants[randomIndex];
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
