var express = require("express")
router = express.Router()

router.post("/", (req,res) => {
  Movie.find({ $or :[{director: {'$regex': req.body.movie, $options: "i"}},{title:{'$regex': req.body.movie, $options: "i"}}]}, function(err, result){
    if (err){ 
      console.log("Error")} 
    else {
      res.render("index", {directorData: result})
    }
  })
})

router.get("/", (req,res) => {
  var cookies = req.cookies;
  if (cookies.loggedIn === undefined) res.redirect("signUp");
  else res.render("search", {userName: cookies.username})
 })

 module.exports = router