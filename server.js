const express = require("express");
const path = require("path");
const session = require("express-session");
const keys = require("./config/keys");
const authRoutes = require("./routes/auth-routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Require models for syncing
const db = require("./models");

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: keys.cookieKey,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
	app.listen(PORT, () => {
		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
});
