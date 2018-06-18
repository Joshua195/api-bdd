const mongoose = require('mongoose')
const Coupon = require('../models/coupon')
const _ = require('lodash')

module.exports = {

  async getCouponsEnable(req, res){
    try {
      const coupons = await Coupon.find({ isEnable: true }).exec()
      if (!_.isEmpty(coupons)) {
        res.status(200).send(coupons)
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
  },

  async getCoupons(req, res){
    try {
      const coupons = await Coupon.find().exec()
      if (!_.isEmpty(coupons)) {
        res.status(200).send(coupons)
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
  },

  async newCoupon(req, res) {
    try {
      await Coupon.create({
        _id : new mongoose.Types.ObjectId(),
        ...req.body
      })
      res.status(200).send({
        message: 'Coupon created'
      })
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async updateCoupon(req, res) {
    try {
      const { id } = req.params
      const result = await Coupon.update({_id: id}, { $set: req.body }).exec()
      if (result.ok === 1) {
        res.status(200).send({
          message: 'Coupon updated'
        })
      } else {
        res.status(400).send({
          message: 'Fail update Coupon'
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async deleteCoupon(req, res) {
    try {
      const { id } = req.params
      const result = await Coupon.findOneAndRemove({_id: id}).exec()
      if (!_.isEmpty(result)) {
        res.status(200).send({
          message: 'Coupon deleted'
        })
      } else {
        res.status(400).send({
          message: 'Fail delete Coupon'
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