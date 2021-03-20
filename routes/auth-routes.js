const express = require("express");
const router = express.Router();

const db = require("../models");
const passport = require("passport");

router.post("/auth/signup", async (req, res) => {
	try {
		const user = await db.User.create(req.body);

		res.json(user);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get(
	"/auth/signin",
	passport.authenticate("local", { failureRedirect: "/login" }),
	(req, res) => {
		res.redirect("/");
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
		res.redirect("/dashboard");
	}
);

router.get("/auth/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

module.exports = router;
