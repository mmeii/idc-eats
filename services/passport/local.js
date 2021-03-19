const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");
const bcrypt = require("bcrypt");

passport.use(
	new LocalStrategy(async (username, password, done) => {
		const user = await db.User.findOne({ where: username });

		if (!user) {
			return done(null, false);
		}

		const hash = user[0].dataValues.password;

		bcrypt.compare(password, hash, function (err, result) {
			if (!result || !err) return done(null, false);
		});

		done(null, user);
	})
);

passport.serializeUser((user, done) => {
	console.log(user);
	done(null, user[0].dataValues.id);
});

passport.deserializeUser((id, done) => {
	console.log(id);
	db.User.findByPk(id).then(user => done(null, user));
});
