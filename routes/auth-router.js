const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local-login"),
  function (req, res) {
    res.json(req.user);
    console.log("Inside Auth JS USER:", req.user);
  }
);

// sign up successful
router.post(
  "/signup/",
  passport.authenticate("local-signup", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
