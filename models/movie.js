mongoose = require('mongoose');
var Schema = mongoose.Schema

Movie = mongoose.model('movies', new Schema({ 
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: Array,
  rate: String
}), 'movies')

module.exports = Movie