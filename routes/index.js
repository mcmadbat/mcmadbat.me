let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index')
})

// redirect to last stats google play listing
router.get('/laststats', function (req, res) {
  res.redirect('https://play.google.com/store/apps/details?id=me.mcmadbat.laststats')
})

// redirect to redditatwork
router.get('/sfwreddit', function (req, res) {
  res.redirect('https://github.com/mcmadbat/RedditAtWork')
})

// redirect to batter up
router.get('/apps/batterup/', function (req, res) {
  res.redirect('https://chrome.google.com/webstore/detail/batter-up/jnafaeneoijiefchaegfgoiehafbdfob?hl=en')
})

module.exports = router
