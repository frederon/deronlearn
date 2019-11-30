var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/courses")
  } else {
    return res.render("index", { title: "deronLearn" });
  }
});

module.exports = router;
