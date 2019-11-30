var express = require("express");
var router = express.Router();
var passport = require("passport");


router.post("/", function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (info) {
      return res.render("message", info);
    }
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/auth");
    }
    req.login(user, err => {
      if (err) {
        return next(err);
      }
      req.session.save(() => {
        res.redirect("/courses")
      })
    });
  })(req, res, next);
});

router.get("/", function (req, res, next) {
  res.redirect("/")
})

module.exports = router;
