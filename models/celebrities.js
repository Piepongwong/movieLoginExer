const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/video')

var starSchema = new mongoose.Schema ({
  firstname: String,
  lastname: String,
  nationality: String
})

var Star = mongoose.model('celebrities', starSchema)

module.exports = Star