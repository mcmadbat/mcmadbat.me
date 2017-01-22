var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render ('index');
});

// redirect to last stats google play listing
router.get('/laststats', function(req, res){
	res.redirect('https://play.google.com/store/apps/details?id=me.mcmadbat.laststats');
});

// redirect to redditatwork
router.get('/sfwreddit', function(req, res){
	res.redirect('https://github.com/mcmadbat/RedditAtWork');
});


module.exports = router;
