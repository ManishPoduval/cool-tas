const router = require("express").Router();

/* GET home page */
router.get("/manish", (req, res, next) => {
  res.render("manish.hbs");
});

module.exports = router;