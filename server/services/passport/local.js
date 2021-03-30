const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");
const bcrypt = require("bcrypt");

passport.use(
	new LocalStrategy(async (username, password, done) => {
		console.log(username, password);
		const user = await db.User.findOne({ where: { username } });

		if (!user) {
			return done(null, false);
		}

		const hash = user.dataValues.password;

		bcrypt.compare(password, hash, function (err, result) {
			if (!result || err) {
				return done(null, false);
			} else {
				console.log(user);
				done(null, user);
			}
		});
	})
);
