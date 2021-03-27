const express = require("express");
const router = express.Router();

const db = require("../models");
const passport = require("passport");

router.post("/auth/signup", async (req, res) => {
	try {
		const existingUser = await db.User.findOne({
			where: { username: req.body.username },
		});

		if (existingUser) {
			return res.send("Username already taken.");
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

		res.json(user);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.post(
	"/auth/signin",
	passport.authenticate("local", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect("/eats");
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
	passport.authenticate("google"),
	(req, res) => {
		res.redirect("/eats");
	}
);

router.get("/auth/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

module.exports = router;
