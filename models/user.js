const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  firstName: String,
  lastName: String,
  telephone: String,
  username: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userShema);