const mongoose = require('mongoose')
const Product = require('../models/product')
const _ = require('lodash')

module.exports = {

  async getProducts(req, res){
    try {
      const products = await Product.find().exec()
      if (!_.isEmpty(products)) {
        res.status(200).send(products)
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

  async getProduct(req, res) {
    try {
      const { id } = req.params
      const product = await Product.findById(id)
      if (!_.isEmpty(product)) {
        res.status(200).send({
          ...product._doc
        })
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

  async newProduct(req, res) {
    try {
      await Product.create({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
      })
      res.status(200).send({
        message: 'Product created'
      })
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async updateProduct(req, res) {
    try {
      const { id } = req.params
      const result = await Product.update({_id: id}, { $set: req.body }).exec()
      if (result.ok === 1) {
        res.status(200).send({
          message: 'Product updated'
        })
      } else {
        res.status(400).send({
          message: 'Fail update product'
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async deleteProduct(req, res) {
    try {
      const { id } = req.params
      const result = await Product.findOneAndRemove({_id: id}).exec()
      if (!_.isEmpty(result)) {
        res.status(200).send({
          message: 'Product deleted'
        })
      } else {
        res.status(400).send({
          message: 'Fail delete product'
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