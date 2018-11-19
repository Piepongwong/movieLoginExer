var express = require('express');
var router = express.Router();

router.get("/", (req,res) => {
  var cookies = req.cookies;
 if (cookies.loggedIn === undefined) res.redirect("signUp");
 else res.render("create");
})

router.post("/", (req,res) =>{
  var movie = new Movie (req.body)
  movie.save();
  res.render("create");
})

router.post("/createCeleb", (req,res) =>{
  var celeb = new Celeb (req.body)
  celeb.save();
  res.render("create");
})

module.exports = router