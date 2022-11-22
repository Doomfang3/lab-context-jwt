const router = require('express').Router()

router.post('/signup', (req, res, next) => {
  /* Get back the payload from your request, as it's a POST you can access req.body */

  /* Hash the password using bcryptjs */

  /* Record your user to the DB */

  res.json('Pinging signup')
})

router.post('/login', (req, res, next) => {
  /* Get back the payload from your request, as it's a POST you can access req.body */

  /* Try to get your user from the DB */

  /* If your user exists, check if the password is correct */

  /* If your password is correct, sign the JWT using jsonwebtoken */
  res.json('Pinging login')
})

router.get('/verify', (req, res, next) => {
  res.json('Pinging verify')
})

module.exports = router
