const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idUser: String,
  name: String,
  unit: String,
  price: String,
});

module.exports = mongoose.model('Material', materialSchema);