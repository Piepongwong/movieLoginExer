const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/video')

var userSchema = new mongoose.Schema ({
  username: String,
  email: String,
  firstname: String,
  lastname: String,
  password: String
})

var User = mongoose.model('logins', userSchema)

module.exports = User
