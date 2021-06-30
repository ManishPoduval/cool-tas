const router = require ("express")

router.get('/yanis', (req, res, next)=>{
  res.render('/views/yanis.hbs')
})

module.exports = router