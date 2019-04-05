var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('text', { 
	  title: 'Prototype v1 Relex' 
  });
});

router.get('/tekstb', function(req, res, next) {
  res.render('tekstb', { 
	  title: 'Prototype v1 Relex' 
  });
});
module.exports = router;
