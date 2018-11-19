var express = require("express")
var app = express()
const bcrypt = require('bcrypt');

var User = require("../models/login")

app.get('/', function(req, res) {
  res.render('login')
})

app.post("/", function(req, res) {
  let mailOrUsername = req.body.email
  User.find({$or: [{email: mailOrUsername}, {username: mailOrUsername}]})
  .then((result)=> {
    if (result.length == 0) {
      res.redirect("signup")
    }
    else {
      bcrypt.compare(req.body.password, result[0].password, function(err, match) {
        if (match == true) {
        res.cookie("loggedIn", "true", {signed: true})
        res.render("yourspace", {loggedIn: true})
        }
        else {
          res.render("error")
        }
      })
    }
  })
  .catch((err)=>{
    res.end("ERROR", err)
  })
})


module.exports = app

