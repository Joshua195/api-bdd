const mongoose = require('mongoose');

const couponsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  key: String,
  description: String,
  quantity: Number,
  isEnable: { type: Boolean, default: false }
});

module.exports = mongoose.model('Coupons', couponsSchema);