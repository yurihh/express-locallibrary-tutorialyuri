var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/cool', function(req, res, next) {
  res.render('index', { title: "You are so cool!!!!!" });
});

/* GET home page. */
router.get('/ifc', function(req, res, next) {
  res.render('index', { title: "Ifc é muito bom" });
});

/* GET home page. */
router.get('/cool/beach', function(req, res, next) {
  res.send("praia legal nao sei");
});

module.exports = router;