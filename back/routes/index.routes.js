const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

/* Make some routes there for what you need, don't forget that you can use your middleware where you define the use of this router */

module.exports = router
