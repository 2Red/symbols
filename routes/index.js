var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Symbols Support' });
});

router.get('/draw', function (req, res, next) {
  res.render('draw', { title: 'TEXT ART painting tool - TELL.WTF / FSymbols', layout: false });
});

module.exports = router;
