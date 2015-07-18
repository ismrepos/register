var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('regist', { title: 'Express' });
});

router.post('/', function(req, res) {
    res.render('regist/success', { title: 'regist success' });
});

module.exports = router;