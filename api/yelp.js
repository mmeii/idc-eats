const axios = require('axios')
const keys= require("../config/keys")

module.exports = axios.create({
	baseURL: "https://api.yelp.com/v3/businesses/search",
	headers: {
		Authorization: "Bearer " + keys.yelpSecret,
	},
});
