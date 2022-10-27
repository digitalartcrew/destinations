const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./../models");
const db = require("../db");

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      username: "email",
      password: "password",
    },
    async (email, password, done) => {
      try {
        // check if user exists
        const userExists = await User.findOne({ email: email });
        if (userExists) {
          return done(null, false);
        }
        // Create a new user with the user data provided
        const user = await User.create({ email, password });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// router.post(
//   "/login",
//   passport.authenticate("local-login", { session: false }),
//   (req, res, next) => {
//     // login
//     res.json({
//       user: req.user,
//     });
//   }
// );

// sign up successful
router.post(
  "/signup/",
  passport.authenticate("local-signup", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
