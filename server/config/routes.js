const mongoose = require('mongoose')
var User = require('../models/user')
const quotes = require('../controllers/quotes')
module.exports = function(app){
    app.get('/', function(req, res) {
        quotes.index(req, res);
    })

    app.post('/quotes', function(req, res) {
        quotes.postquote(req, res);
    })
    app.get('/quotes', function(req, res) {
        quotes.getquote(req, res);
        console.log('finding users');
    });    
}
