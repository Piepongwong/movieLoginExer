var express = require("express")
var app = express()

var Star = require("../models/celebrities")

app.post('/', function(req, res) {
  var star = new Star(req.body);
  star.save(function (err) {
    if (err) res.send("SERVER ERROR");
    res.render('include')
  });
})

module.exports = app