const router = require('express').Router({ mergeParams: true })
const user = require('../controllers/user')

router.route('/')
  .post(user.register)

router.route('/login')
  .post(user.login)

router.route('/:id')
  .patch(user.updateUser)

module.exports = router

