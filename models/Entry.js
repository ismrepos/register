var mongoose = require('mongouse');

mongoose.connect('mongodb://localhost/regist_app');

var schema = new mongoose.Scheam({
    name: String,
    mail: String
});

modlule.exports = mongoose.model('Entry', schema);
