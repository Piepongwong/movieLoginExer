var express = require("express")
var app = express()

app.get('/', function(req, res) {
  if (req.signedCookies.loggedIn == "true") {
    res.render('celebrities', {loggedIn: true})
  } else {
    res.render('celebrities', {loggedIn: false})
  }
})

module.exports = app