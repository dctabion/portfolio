var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daniel Tabion' });
});

router.get('/resume', function(req, res) {
  var file = __dirname + '/../public/assets/ResumeDCTabion.pdf';
  res.download(file);
});

router.get('/phone', function(req, res) {
  res.render('phone', { title: 'Phone'});
});

module.exports = router;
