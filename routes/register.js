var express = require('express');
var Entry = require('../models/Entry');
//tmp
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('register', { title: 'Registration for HPCCOM 2015' });
});

/* POST method */
router.post('/', function(req, res) {
    console.log(req.body);

    var newEntry = new Entry(req.body);
    console.log(newEntry);
    newEntry.save(function(err) {
        //validation
        if(err) {
            console.log(err.errors);
            //retry
            res.redirect('/register');
        }else{
            res.render('register/confirm',
                       {title: 'Registration for HPCCOM 2015',
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        Title: req.body.Title,
                        email: req.body.email,
                        organization: req.body.organization,
                        country: req.body.country});
        }
    });
});

router.post('/confirm', function(req, res) {
    console.log(req.body);

    //validation again

    var entryModel = mongoose.model('Entry');
    entryModel.find({}, function(err, entrys){
        for(var i  = 0; i < entrys.length; i++){
            console.log(entrys[i]._id);
            console.log(entrys[i].email);
        }
    });


    res.render('register/complete',
               {title: 'Registration for HPCCON 2015 Successful. Thank you!',
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                Title: req.body.Title,
                email: req.body.email,
                organization: req.body.organization,
                country: req.body.country});
});

module.exports = router;
