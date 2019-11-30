var express = require("express");
var router = express.Router();
var axios = require("axios");
var fs = require("fs");

router.get("/", function (req, res, next) {
  if (req.isAuthenticated()) {
    axios
      .get(`http://localhost:5000/courses/`)
      .then(res2 => {
        res.render("courses", {courses: res2.data })
      })
      .catch(error => next(error));
  } else {
    res.redirect("/");
  }
});

router.get("/:courseId/:videoId", function(req, res, next) {
  if (req.isAuthenticated()) {
    axios
      .get(`http://localhost:5000/courses/${req.params.courseId}`)
      .then(res2 => {
        res.render("courses", {
          course: res2.data,
          courseId: req.params.courseId,
          videoId: req.params.videoId
        });
      })
      .catch(error => next(error));
  } else {
    res.redirect("/");
  }
});


module.exports = router;
