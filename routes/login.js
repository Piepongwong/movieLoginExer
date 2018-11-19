var express = require("express"),
router = express.Router()

router.get("/", (req,res) => {
  res.render("logIn")
})

const bcrypt = require('bcrypt');

router.post("/", (req,res) => {
  Account.find({username: req.body.username})
  .then((result) => {
    if (result.length > 0) {
      var password = req.body.password;
      bcrypt.compare(password, result[0].password)
      .then((match) => {
        if (match){
          res.cookie('loggedIn', 'true');
          res.cookie('username', result[0].username)
          res.render("search");
        }
        else res.render("passwordFail")
      })
      .catch((err)=>{
        if (err) console.log("Bcrypt Error or Internal Code Error:" + err) 
      })
    } 
    else res.render("usernameFail")
  }) 
  .catch((err)=>{
    if (err) console.log("Error:" + err)
  })
})
    

  module.exports = router
