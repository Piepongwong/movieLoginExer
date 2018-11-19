var express = require("express"),
app = express(),
path = require("path"),
bodyParser = require('body-parser'),
cookieParse = require('cookie-parser'),
mongoose = require('mongoose'),
hbs = require("hbs")
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/video',  (err) => {
  if (err) console.log("Not connected to the database" + err)
  else console.log("Succesfully connected to MongoDB")
})

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParse())

Account = require("./models/account")
Celeb = require("./models/celeb")
Movie = require("./models/movie")

app.use("/index", require('./routes/index'));
app.use("/login", require('./routes/login'));
app.use("/create", require('./routes/create'));
app.use("/logout", require('./routes/logout'));
app.use("/search", require('./routes/search'));
app.use("/signup", require('./routes/signup'));
app.use("/celeb", require('./routes/celeb'))




app.listen(3000, () => {
  console.log("Running the server on port 3000");
})

