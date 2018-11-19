var express = require("express"),
router = express.Router();
const bcrypt = require('bcrypt');

router.get("/", (req,res) => {
  res.render("signUp");
  })
  
  router.post("/", (req,res) => {
    bcrypt.hash(req.body.password, 5) 
    .then((hash) => {
      Account.create({
        username: req.body.username,
        password: hash,
        name: req.body.name,
        lastName: req.body.lastName
      })
      res.render("signUp")
    })
    .catch((err) => {
      console.log("Error!" + err)
    })
  });
   


  module.exports = router
