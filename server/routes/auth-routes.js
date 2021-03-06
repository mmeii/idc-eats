const express = require("express");
const router = express.Router();

const db = require("../models");
const passport = require("passport");

router.get("/auth", (req, res) => {
	try {
		res.send(req.user);
	} catch (e) {
		res.send(e);
	}
});

router.post("/auth/signup", async (req, res, next) => {
	try {
		const existingUser = await db.User.findOne({
			where: { username: req.body.username },
		});

		if (existingUser) {
			req.flash('error', "Username aleady taken")
			return res.send();
		}

		const user = await db.User.create(req.body);

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

		passport.authenticate("local", (err, user) => {
			req.logIn(user, errLogIn => {
				if (errLogIn) {
					return next(errLogIn);
				}
				return res.redirect("/");
			});
		})(req, res, next);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.post(
	"/auth/signin",
	passport.authenticate("local", {
		failureRedirect: "/",
		failureFlash: "Invalid username or password",
	}),
	(req, res) => {
		res.redirect("/home");
	}
);

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile"],
	})
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/", failureFlash: true }),
	(req, res) => {
		res.redirect("/home");
	}
);

router.get("/auth/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

module.exports = router;
