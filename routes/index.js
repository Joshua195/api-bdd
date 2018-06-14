const router = require('express').Router()
const product = require('./product')
const user = require('./user')

module.exports = function (app) {

  app.use('/product', product)
  app.use('/user', user)
  app.use(router)

}