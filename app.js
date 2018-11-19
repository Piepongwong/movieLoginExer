//Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/video')

//Express
var express = require("express")
var app = express()

//HBS
var hbs = require("hbs")
hbs.registerPartials(__dirname + '/views/partials');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static("public"))

//Cookie-parser and body parser
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
  extended: true
}))
app.use(cookieParser('MzaP7XtPSEmbB3AiDGxkeFO1cnxr/EPsvcsLmnqG03k='))

//Routes
app.use("/", require("./routes/movie"))
app.use("/", require("./routes/searchmovies"))

app.use("/celebrities", require("./routes/celebrities"))
app.use("/searchcelebrities", require("./routes/searchcelebrities"))

app.use("/login", require("./routes/login"))

app.use("/include", require("./routes/include"))
app.use("/incstar", require("./routes/incstar"))

app.use("/logout", require("./routes/logout"))

app.use("/signup", require("./routes/signup"))

app.listen(3000)