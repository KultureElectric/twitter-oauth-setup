const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
require("./models/userModel");
require("./services/passport");

mongoose.connect("mongodb://localhost/twitter-oauth-setup");

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());

app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(5000);
