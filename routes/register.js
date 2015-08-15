var express = require('express');
var Entry = require('../models/Entry');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('register',
               {title: 'Registration for HPCCOM 2015 / HPC on R Workshop',
                event: '',
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
                   {title: 'Registration for HPCCOM 2015 / HPC on R Workshop',
                    event_id: req.body.event_id,
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
                   {title: 'Registration for HPCCOM 2015 / HPC on R Workshop',
                    event_id: req.body.event_id,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    Title: req.body.Title,
                    email: req.body.email,
                    organization: req.body.organization,
                    country: req.body.country});
    }
});

router.post('/confirm', function(req, res) {
    //validation by Entry.save (check email duplciated)
    var newEntry = new Entry(req.body);
    console.log(newEntry);
    newEntry.save(function(err) {
        if(err) {
            console.log(err.errors);
            //retry
            res.redirect('/register');
        }else{
            res.render('register/complete',
                       {title: 'Registration Successful. Thank you!',
                        event_id: req.body.event_id,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        Title: req.body.Title,
                        email: req.body.email,
                        organization: req.body.organization,
                        country: req.body.country});
        }

    });

});

module.exports = router;
