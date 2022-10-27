// load all the things we need
const LocalStrategy = require("passport-local").Strategy;

// load up the user model
const { User } = require("../models");

// expose this function to our app using module.exports
module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        username: "username",
        password: "password",
      },
      async (username, password, done) => {
        try {
          // check if user exists
          const userExists = await User.findOne({ username: username });
          if (userExists) {
            return done(null, false);
          }
          // Create a new user with the user data provided
          const user = await new User({ username, password });
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(function (username, password, done) {
      User.findOne(
        {
          username: username.toLowerCase(),
        },
        function (err, user) {
          // if there are any errors, return the error before anything else
          if (err) return done(err);

          // if no user is found, return the message
          if (!user) return done(null, false);

          // if the user is found but the password is wrong
          if (!user.validPassword(password)) return done(null, false);

          // all is well, return successful user
          return done(null, user);
        }
      );
    })
  );
};
