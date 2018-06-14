const router = require('express').Router({ mergeParams: true })
const product = require('../controllers/product')

router.route('/')
  .get(product.getProducts)

router.route('/:id')
  .get(product.getProduct)

router.route('/')
  .post(product.newProduct)

router.route('/:id')
  .patch(product.updateProduct)

router.route('/:id')
  .delete(product.deleteProduct)

module.exports = router

