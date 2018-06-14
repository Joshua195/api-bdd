const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idUser: String,
  status: Boolean,
  createdAt: { type: Date, default: Date.now },
  deliveryTime: Date,
  isEnable: { type: Boolean, default: false },
  products: []
});

module.exports = mongoose.model('Orders', ordersSchema);