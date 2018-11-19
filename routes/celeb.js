var express = require("express");
var router = express.Router();
var cookieParse = require('cookie-parser')
router.use(cookieParse())


router.get("/", function(req,res){
  var cookies = req.cookies;
  if (cookies.loggedIn === undefined) res.redirect("signUp");
  else res.render("celeb");
})

router.post("/", function(req,res){
  Celeb.find({ $or :[{name: {'$regex': req.body.celeb, $options: "i"}},{lastName: {'$regex': req.body.celeb, $options: "i"}},{nationality: {$regex: req.body.celeb, $options: "i"}}],}, function(err,result){
  res.render("celeb", {celebData: result})
  })
})

module.exports = router