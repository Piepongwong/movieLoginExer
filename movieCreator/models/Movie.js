const mongoose = require('mongoose')
const Schema = mongoose.Schema

var movieSchema = new Schema({
    movie: String,
    duration: String,
})

mongoose.model("movie", movieSchema)
