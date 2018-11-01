const passport = require("passport");
const mongoose = require("mongoose");
const TwitterStrategy = require("passport-twitter").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const foundUser = await User.findById(id);
  done(null, foundUser);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TwitterConsumerKey,
      consumerSecret: keys.TwitterConsumerSecret,
      callbackURL: "http://localhost:5000/auth/twitter/callback"
    },
    async (token, tokenSecret, profile, done) => {
      const existingUser = await User.findOne({ twitterId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      }
      const newUser = await new User({ twitterId: profile.id }).save();
      done(null, newUser);
    }
  )
);
