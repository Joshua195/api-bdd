const mongoose = require('mongoose')
const Material = require('../models/material')
const _ = require('lodash')

module.exports = {

  async getMaterials(req, res){
    try {
      const material = await Material.find().exec()
      if (!_.isEmpty(material)) {
        res.status(200).send(material)
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

  async getMaterial(req, res) {
    try {
      const { id } = req.params
      const material = await Material.findById(id)
      if (!_.isEmpty(material)) {
        res.status(200).send({
          ...material._doc
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

  async newMaterial(req, res) {
    try {
      await Material.create({
        _id : new mongoose.Types.ObjectId(),
        ...req.body
      })
      res.status(200).send({
        message: 'Material created'
      })
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async updateMaterial(req, res) {
    try {
      const { id } = req.params
      const result = await Material.update({_id: id}, { $set: req.body }).exec()
      if (result.ok === 1) {
        res.status(200).send({
          message: 'Material updated'
        })
      } else {
        res.status(400).send({
          message: 'Fail update Material'
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async deleteMaterial(req, res) {
    try {
      const { id } = req.params
      const result = await Material.findOneAndRemove({_id: id}).exec()
      if (!_.isEmpty(result)) {
        res.status(200).send({
          message: 'Material deleted'
        })
      } else {
        res.status(400).send({
          message: 'Fail delete material'
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