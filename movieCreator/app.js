//Requiring all modules
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
//Database connection
mongoose.connect("mongodb://localhost:27017/films")

//Models requires
require("./models/Movie")

//Execute express
var app = express();




//We set all folders
app.set("view engine", "hbs")
app.set("views", __dirname +"/views")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false})) //Hey this is needed to post
app.use(bodyParser.json())

hbs.registerPartials(__dirname + "/views/partials")

var newMovie = mongoose.model("movie") //Model for movie

//Ini index.hbs page
app.get("/", (req, res, next) =>{
    res.render("index")
})

//Data from index
app.post("/movienew", (req, res, next) => {
    
   var temporalMovie = {
       movie: req.body.moviename,
       duration: req.body.movieduration
   }
   new newMovie(temporalMovie)
   .save()
   res.render("searchForFilm")

})

app.post("/searchFilm", (req, res, next) =>{
    var search = req.body.filmToSearch;
    var match = [];
    newMovie.find({}, (movies) =>{
        movies.forEach((film) =>{
            if(film.movie == search){
                match.push(film);
            }
        })
        
    })
    if(match.length <= 0) console.log("You have a matched film with that data!");
    res.render("index")
})

app.listen(3000, () =>{
    console.log("Listening to port")
})