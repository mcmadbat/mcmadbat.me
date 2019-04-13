const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index')
})

// redirect to batter up
router.get('/apps/batterup/', function (req, res) {
  res.redirect('https://chrome.google.com/webstore/detail/batter-up/jnafaeneoijiefchaegfgoiehafbdfob?hl=en')
})

module.exports = router
