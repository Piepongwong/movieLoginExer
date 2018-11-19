var express = require("express")
var app = express()

var Movie = require("../models/movie")

app.post("/searchmovies", function(req, res) {
  Movie.find({$and: [{title: {$regex: req.body.keyword, $options:'i'}}, {year: {'$regex': req.body.year, $options:'i'}}, {director: {'$regex': req.body.director, $options:'i'}}]}, {title:1, year:1, rate:1, director:1, _id:0})
  .then((result)=> { 
    if (req.signedCookies.loggedIn == "true") {
      res.render('movie', {loggedIn: true, showmovie: result})
    }
    else {
      res.render('movie', {loggedIn: false, showmovie: result})
    }
  })
  .catch((err)=>{
    console.log("ERROR", err)
    res.end()
  })
})

module.exports = app