
var express = require('express')
var app = express()
var hbs = require("hbs")

hbs.registerPartials(__dirname + '/views/partials');// tells the computer there is a template folder

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static('public'))

app.get("/index", function(req,res){
    res.render("index", {name: "whatevaaaaaaaarrrrrrr"})
})

app.get("/contact", function(req,res){
    res.render("contact", {name: "hellooooooooo"})
})

app.get("/contact", function(req,res){
    res.render("contact", {img: "./ccs/img/fidel.jpg"})
})




app.listen(4000)