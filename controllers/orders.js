const mongoose = require('mongoose')
const Orders = require('../models/orders')

module.exports = {
  async newOrder(req, res) {
    try {
      await Orders.create({
        _id : new mongoose.Types.ObjectId(),
        ...req.body
      })
      res.status(200).send({
        message: 'Order created'
      })
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  }
}