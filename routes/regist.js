var express = require('express');
var entry = require('../models/Entry');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('regist', { title: 'Express' });
});

/* POST method */
router.post('/', function(req, res) {
    console.log(req.body);
    res.render('regist/success', {title: 'success', name: 'hoge'});
});

module.exports = router;
