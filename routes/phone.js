var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('phone', { title: 'Phone'});
});

module.exports = router;
