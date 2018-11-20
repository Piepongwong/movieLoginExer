const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/video')

var movieSchema = new mongoose.Schema ( {
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: Array,
  rate: String 
});

var Movie = mongoose.model('movies', movieSchema)

module.exports = Movie
