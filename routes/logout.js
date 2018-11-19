var express = require("express")
router = express.Router();


router.post("/", (req,res) => {
  req.cookies;
  res.clearCookie("username","loggedIn");
  res.render("logOut");
})

module.exports = router