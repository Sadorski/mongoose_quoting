const mongoose = require('mongoose')
var User = require('../models/user')

module.exports.index = function(req, res){
    res.render('index');
}
module.exports.getquote = function(req, res){
    User.find({}, function(err, quotes) {
        if (err) { 
            console.log(err); 
        }
        console.log(quotes)
        res.render('quotes', {quotes: quotes});
    })
}
module.exports.postquote = function(req, res){
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
            for(var key in err.errors){
                req.flash('form_validation', err.errors[key].message);
            }
            res.redirect('/')
        } else { 
        console.log('successfully added a user!');
        res.redirect('/quotes');
        }
    })
}