const mongoose = require('mongoose')
module.exports = function(){
    mongoose.connect('mongodb://localhost/quoting_dojo');
}
