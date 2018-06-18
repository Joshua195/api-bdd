const router = require('express').Router({ mergeParams: true })
const orders = require('../controllers/orders')

router.route('/')
  .post(orders.newOrder)

router.route('/:idUser')
  .get(orders.getOrdersByUser)
module.exports = router

