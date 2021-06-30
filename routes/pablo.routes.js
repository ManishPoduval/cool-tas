const router = require("express").Router()

/* GET Pablo's page */
router.get("/pablo", (req, res, next) => {
  res.render("pablo")
})

module.exports = router
