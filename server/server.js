const http = require("http");
const path = require("path");
const express = require("express");
const passport = require("passport");
const flash = require('connect-flash');
const reload = require("reload");
const es6Renderer = require("express-es6-template-engine");
const serialize = require("serialize-javascript");
const cookieSession = require("cookie-session");

const packageJson = require("../package.json");
const keys = require("./config/keys");
const authRoutes = require("./routes/auth-routes");
const apiRoutes = require("./routes/api-routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Require models for syncing
const db = require("./models");
require("./services/passport/google");
require("./services/passport/local");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cookieSession({
		keys: [keys.cookieKey],
		maxAge: 1000 * 60 * 60 * 24,
	})
);
app.use(flash())

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.use(authRoutes);
// Api Routes
app.use(apiRoutes);

// view engine setup
app.engine("html", es6Renderer);
app.set("views", path.resolve(__dirname, "../build/"));
app.set("view engine", "html");

// Serve static files
app.use(
	packageJson.homepage,
	express.static(path.join(__dirname, "..", "build"), {
		index: false,
	})
);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// }
const server = http.createServer(app);
db.sequelize.sync().then(function () {
	server.listen(PORT, () => {
		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
});

if (process.env.NODE_ENV !== "production") {
	// Wires up handler for /reload/reload.js route
	reload(app);
}

app.get("*", (req, res) => {
	let user;
	let message;

	if (req.user) {
		user = { id: req.user.id, username: req.user.username }
	}

	if (req.flash) {
		message = req.flash('error')
	}

	res.render("index", {
		locals: {
			user: serialize({ user }, { isJSON: true }),
			message: serialize({ message }, { isJSON: true }),
		},
	});
});
