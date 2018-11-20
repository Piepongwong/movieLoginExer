var express = require("express")
var app = express()

var Star = require("../models/celebrities")

app.post('/', function(req, res) {
  var star = new Star(req.body);
  Star.find({$and: [{firstname: req.body.firstname},{lastname: req.body.lastname},{nationality: req.body.nationality}]})
  .then((result) => {
    if (result.length == 0) {
      star.save(function (err) {
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