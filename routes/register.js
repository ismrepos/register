var express = require('express');
var Entry = require('../models/Entry');
//tmp
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('register',
               {title: 'Registration for HPCCOM 2015',
                firstname: '',
                lastname: '',
                Title: '',
                email: '',
                organization: '',
                country: '',
                errors: ''});

});

/* POST method */
router.post('/', function(req, res) {
    //check empty
    req.assert('Title', 'Title').notEmpty();
    req.assert('firstname', 'First Name').notEmpty();
    req.assert('lastname', 'Last Name').notEmpty();
    req.assert('email', 'email').notEmpty();
    req.assert('organization', 'organization').notEmpty();
    req.assert('country', 'country').notEmpty();

    //TODO sanitize

    var errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        var msg = '';
        errors.forEach(function(err, index, array){
            if(index == 0 ) msg = 'Enter ' + err.msg;
            else msg = msg + ',' + err.msg;
        });
        msg = msg + '!';
        console.log(msg);

        //back with erros
        res.render('register',
                   {title: 'Registration for HPCCOM 2015',
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    Title: req.body.Title,
                    email: req.body.email,
                    organization: req.body.organization,
                    country: req.body.country,
                    errors: msg});

    } else {
        //go to /confirm
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

router.post('/confirm', function(req, res) {
    console.log(req.body);

    //validation by Entry.save (check email duplciated)


/*
    var entryModel = mongoose.model('Entry');
    entryModel.find({}, function(err, entrys){
        for(var i  = 0; i < entrys.length; i++){
            console.log(entrys[i]._id);
            console.log(entrys[i].email);
        }
    });

    //
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
*/
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
