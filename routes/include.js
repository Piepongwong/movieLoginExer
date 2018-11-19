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
  Movie.find({title: req.body.title})
  .then((result) => {
    if (result.length == 0) {
      movie.save(function (err) {
        if (err) res.send("SERVER ERROR");
        else if (req.signedCookies.loggedIn == "true") {
          res.render('include', {loggedIn: true})
        } else {
          res.render("include", {loggedIn: false})
        }
      });
    }
    else if (req.signedCookies.loggedIn == "true") {
      res.render('includeerror', {loggedIn: true})
    } else {
      res.render("includeerror", {loggedIn: false})
    }
  })
})

module.exports = app
