mongoose = require("mongoose")
var Schema = mongoose.Schema

Celeb = mongoose.model('celebrities', new Schema({
  name: String,
  lastName: String,
  nationality: String
}),'celebrities')

module.exports = Celeb