const router = require('express').Router()
const product = require('./product')
const user = require('./user')
const order = require('./orders')
const coupon = require('./coupon')

module.exports = function (app) {

  app.use('/product', product)
  app.use('/user', user)
  app.use('/order', order)
  app.use('/coupon', coupon)
  app.use(router)

}