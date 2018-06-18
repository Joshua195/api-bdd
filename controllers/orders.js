const mongoose = require('mongoose')
const Orders = require('../models/orders')
const _ = require('lodash')

module.exports = {
  async newOrder(req, res) {
    try {
      await Orders.create({
        _id : new mongoose.Types.ObjectId(),
        ...req.body,
        number: Math.floor(Math.random() * 999999) - 100000
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
  },

  async getOrdersByUser(req, res) {
    try {
      const { idUser } = req.params
      const ordersByUser = await Orders.find({ idUser }).exec()
      if (!_.isEmpty(ordersByUser)) {
       res.status(200).send(ordersByUser)
      } else {
        res.status(400).send({
          message: 'No entries found'
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  }
}