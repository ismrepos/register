var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/regist_app');

var schema = new mongoose.Schema({
    name: String,
    mail: String
});

module.exports = mongoose.model('Entry', schema);
