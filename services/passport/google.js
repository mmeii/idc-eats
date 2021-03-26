const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../../models");
const keys = require("../../config/keys");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			const oauthId = profile.id;

			const username = profile.displayName;

			var user = await db.User.findOne({
				where: { oauthId },
			});
			if (user === null) {
				try {
					user = await db.User.create({
						oauthId,
						username,
					});

					const categories = await db.Category.findAll({
						where: {
							TypeId: 2,
						},
					});

					for (let category of categories) {
						await db.Weight.create({
							UserId: user.id,
							CategoryId: category.id,
							value: 50,
						});
					}
				} catch (error) {
					console.log(error);
					return done(error);
				}
			}

			done(null, user);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	db.User.findByPk(id).then(user => done(null, user));
});
