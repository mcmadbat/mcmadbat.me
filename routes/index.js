var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render ( 'error', { message: 'Page down, try again later' });
});

module.exports = router;
