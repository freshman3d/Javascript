var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('bittybuy2.html');
	
});

module.exports = router;