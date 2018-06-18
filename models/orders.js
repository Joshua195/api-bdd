const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  number: Number,
  idUser: String,
  status: { type: Boolean, default: false },
  createdAt: Date,
  deliveryTime: Date,
  isEnable: { type: Boolean, default: false },
  products: []
});

module.exports = mongoose.model('Orders', ordersSchema);