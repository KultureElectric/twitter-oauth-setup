const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
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
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    maxAge: 30 * 24 * 60 * 60 * 60 * 1000
  })
);

app.use(passport.initialize());

app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(5000);
