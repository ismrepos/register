var express = require('express');
var entry = require('../models/Entry');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Registration for HPCCOM 2015' });
});

/* POST method */
router.post('/', function(req, res) {
    console.log(req.body.email);
    res.render('register/confirm',
               {title: 'Registration for HPCCOM 2015',
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                Title: req.body.Title,
                email: req.body.email,
                organization: req.body.organization,
                country: req.body.country
               }
              );
});

module.exports = router;
