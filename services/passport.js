const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const keys = require("../config/keys");

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TwitterConsumerKey,
      consumerSecret: keys.TwitterConsumerSecret,
      callbackURL: "/auth/twitter/callback"
    },
    (token, tokenSecret, profile, done) => {
      console.log(profile);
    }
  )
);
