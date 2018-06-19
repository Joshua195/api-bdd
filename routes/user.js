const router = require('express').Router({ mergeParams: true })
const user = require('../controllers/user')

router.route('/')
  .post(user.register)

router.route('/login')
  .post(user.login)

router.route('/admin')
  .post(user.userAdmin)

router.route('/users')
  .get(user.getUsers)

router.route('/:id')
  .patch(user.updateUser)

router.route('/:id')
  .delete(user.deleteUser)

module.exports = router

