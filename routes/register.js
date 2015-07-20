var express = require('express');
var entry = require('../models/Entry');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Registration for HPCCOM 2015' });
});

/* POST method */
router.post('/', function(req, res) {
    console.log(req.body.name);
    res.render('register/confirm', {title: 'Registration for HPCCOM 2015', name: req.body.name});
});

module.exports = router;
