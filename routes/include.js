var express = require("express")
var app = express()

var Movie = require("../models/movie")

app.get('/', function(req, res) {
  
  if (req.signedCookies.loggedIn == "true") {
    res.render('include', {loggedIn: true})
  } else {
    res.render("includelogin")
  }
})

app.post('/', function(req, res) {
  var movie = new Movie(req.body);

  movie.save(function (err) {
    if (err) res.send("SERVER ERROR");
    res.render('include')
  });
})

module.exports = app
