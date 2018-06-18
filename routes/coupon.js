const router = require('express').Router({ mergeParams: true })
const coupon = require('../controllers/coupon')

router.route('/')
  .get(coupon.getCoupons)

router.route('/enable')
  .get(coupon.getCouponsEnable)

router.route('/')
  .post(coupon.newCoupon)

router.route('/:id')
  .patch(coupon.updateCoupon)

router.route('/:id')
  .delete(coupon.deleteCoupon)

module.exports = router

