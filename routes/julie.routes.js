const router = require("express").Router();

/* GET home page */
router.get("/julie", (req, res, next) => {
  res.render("julie.hbs");
});

module.exports = router;