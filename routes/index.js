var express = require("express")
router = express.Router();


router.get("/", (req,res) => {
  var cookies = req.cookies;
  if (cookies.loggedIn === undefined) res.redirect("signUp");
  else res.render("index")
 })


 module.exports = router