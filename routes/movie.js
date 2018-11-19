var express = require("express")
var app = express()

app.get('/', function(req, res) {
  if (req.signedCookies.loggedIn == "true") {
    res.render('movie', {loggedIn: true})
  } else {
    res.render('movie', {loggedIn: false})
  }
})

module.exports = app