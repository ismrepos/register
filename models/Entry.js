var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


mongoose.connect('mongodb://localhost/register_app');

var schema = new mongoose.Schema({
    firstname: {type: String, required:'First Name is required'},
    lastname: {type: String, required:'Last Name is required'},
    Title: {type: String, required:'Title is is required'},
    email: {type: String, required:'Email is required', unique: true },
    organization: {type: String, required:'Organization is required'},
    country: {type: String, required: 'Country is required'}
});

module.exports = mongoose.model('Entry', schema);
