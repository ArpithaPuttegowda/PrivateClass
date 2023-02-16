var express = require("express"); //es6 below
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", {title: "Express"});
});

module.exports = router;
