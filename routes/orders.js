const router = require('express').Router({ mergeParams: true })
const orders = require('../controllers/orders')

router.route('/')
  .post(orders.newOrder)

router.route('/:idUser')
  .get(orders.getOrdersByUser)

router.route('/')
  .get(orders.getOrders)

router.route('/:id')
  .patch(orders.updateOrder)

router.route('/:id')
  .delete(orders.deleteOrder)

module.exports = router

