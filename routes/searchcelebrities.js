var express = require("express")
var app = express()

var Star = require("../models/celebrities")

app.post("/", function(req, res) {
  Star.find({$and: [{firstname: {$regex: req.body.name, $options:'i'}}, {lastname: {'$regex': req.body.surname, $options:'i'}}, {nationality: {'$regex': req.body.country, $options:'i'}}]}, {firstname:1, lastname:1, nationality:1, _id:0})
  .then((result)=> {
    if (req.signedCookies.loggedIn == "true") {
      res.render('celebrities', {loggedIn: true, showcelebrity: result})
    }
    else {
      res.render('celebrities', {loggedIn: false, showcelebrity: result})
    }
  })
  .catch((err)=>{
    console.log("ERROR", err)
    res.end()
  })
})

module.exports = app