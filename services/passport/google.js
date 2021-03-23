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

			const user = await db.User.findOrCreate({
				where: { oauthId },
				defaults: {
					username,
				},
			});

			// We may need to split out the above findOrCreate and do a find first and
			// if it fails, then do a create with the below Weight inserts (db.Weigh.create)
			// otherwise it will insert new Weights data on the find as well
			// like:
			// const user = await db.User.findOne({
			// 	where: { oauthId },
			// });
			// if (user === null) {
			// 	user = await db.User.create({
			// 		username: username
			// 	});

			// 	const categories = await db.Category.findAll({
			// 		where: {
			// 			TypeId: 2
			// 		}
			// 	});

			// 	for (let category of categories) {
			// 		await db.Weight.create({
			// 			user_id: user.id,
			// 			category_id: category.id,
			// 			value: 50
			// 		});
			// 	}
			// }

			done(null, user);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user[0].dataValues.id);
});

passport.deserializeUser((id, done) => {
	db.User.findByPk(id).then(user => done(null, user));
});
