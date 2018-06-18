const mongoose = require('mongoose');

const couponsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  key: String,
  description: String,
  quantity: Number,
  isEnable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Coupon', couponsSchema);