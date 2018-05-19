var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 6},
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true });

module.exports = mongoose.model('User', UserSchema); 
var User = mongoose.model('User')