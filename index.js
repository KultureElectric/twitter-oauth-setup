const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
require("./models/userModel");
require("./services/passport");

mongoose.connect("mongodb://localhost/twitter-oauth-setup");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected");
});

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.CookieKey]
  })
);

app.use(
  session({
    secret: "keyboard cat",
    maxAge: 30 * 24 * 60 * 60 * 60 * 1000
  })
);

app.use(passport.initialize());

app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(5000);
