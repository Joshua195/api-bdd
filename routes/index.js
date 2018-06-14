const router = require('express').Router()
const product = require('./product')

module.exports = function (app) {

  app.use('/product', product)
  app.use(router)

}