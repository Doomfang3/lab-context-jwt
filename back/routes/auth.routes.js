const router = require('express').Router()
const jwt = require('jsonwebtoken')

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
  const authToken = jwt.sign(
    {
      expiresIn: '6h',
      user: null, // Put yhe data of your user in there
    },
    process.env.TOKEN_SECRET,
    {
      algorithm: 'HS256',
    }
  )

  res.json('Pinging login')
})

router.get('/verify', (req, res, next) => {
  // You need to use the middleware there, if the request passes the middleware, it means your token is good
  res.json('Pinging verify')
})

module.exports = router
