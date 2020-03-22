const express = require('express')
var db = require('../server/database.js')


// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username !== '' && req.body.password !== '') {
    const isUser = db.get('users')
      .find({
        login: req.body.username
      })
      .value()
    console.log(isUser);
    if ((isUser !== undefined) && (isUser.password !== req.body.password)) {
      res.status(401).json({
        message: 'Bad credentials'
      })
    } else {
      if (isUser === undefined) {
        try {
          db.get('users')
            .push({
              login: req.body.username,
              password: req.body.password
            })
            .write()
        } catch (error) {
          console.error(error);
        }

      }
      req.session.authUser = {
        username: req.body.username
      }
      return res.json({
        username: req.body.username
      })
    }

  } else {
    res.status(401).json({
      message: 'Bad credentials'
    })
  }
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({
    ok: true
  })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}