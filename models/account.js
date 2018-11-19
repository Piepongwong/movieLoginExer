mongoose = require('mongoose');
var Schema = mongoose.Schema

Account = mongoose.model('userdata', new Schema({
  username: String,
  password: String,
  name: String, 
  lastName: String
}),'userdata')

module.exports = Account

