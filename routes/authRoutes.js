const passport = require("passport");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send({ hello: "world" });
  });

  app.get("/auth/twitter", passport.authenticate("twitter"));

  app.get("/auth/twitter/callback", passport.authenticate("twitter"));
};
