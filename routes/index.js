var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
router.get('/acercade', function(req, res, next) {
  res.render('acercade.ejs');
});
router.get('/redirect', function(req, res, next) {
  res.redirect('http://www.udenar.edu.co/');
});
router.get('/json', function(req, res, next) {
  res.json(
    {
      producto1:"Papas Margarita",
      producto2 : "Jugo Hit",
      producto3 : "Chocolatina Jet",
      producto4 : "Galleta Festival"
    }
  );
});

module.exports = router;
