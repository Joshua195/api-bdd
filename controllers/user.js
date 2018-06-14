const mongoose = require('mongoose')
const User = require('../models/user')
const _ = require('lodash')
const bcrypt = require('bcrypt');

const USER_ERROR = {
  AUTH_FAILED: {
    status: 403,
    message: 'Username or password wrong'
  },
  USER_NOT_FOUND: {
    status: 404,
    message: 'User not Found'
  },
  FAIL_UPDATE: {
    status: 400,
    message: 'Fail update user'
  },
}

function UserError(error) {
  const { status, message } = error
  this.status = status
  this.message = message
}



module.exports = {
  async register(req, res) {
    try {
      const passwordHash = await bcrypt.hash(req.body.password, 5)
      await User.create({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        username: req.body.username,
        password: passwordHash
      })
      res.status(200).send({
        message: 'User registered'
      })
    } catch (e) {
      console.log(e)
      res.status(500).send({
        error: e
      })
    }
  },

  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username }).exec()
      if (!_.isEmpty(user)) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
          res.status(200).send(user)
        } else {
          throw new UserError(USER_ERROR.AUTH_FAILED)
        }
      } else {
        throw new UserError(USER_ERROR.AUTH_FAILED)
      }
    } catch (e) {
      if (e instanceof UserError) {
        res.status(e.status).send(e)
      } else {
        console.error(e)
        res.status(500).send({ message: 'Something Went Wrong' })
      }
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params
      const result = await User.update({_id: id}, { $set: req.body }).exec()
      if (result.ok === 1) {
        const user = await User.findById(id).exec()
        res.status(200).send(user)
      } else {
        throw new UserError(USER_ERROR.FAIL_UPDATE)
      }
    } catch (e) {
      if (e instanceof UserError) {
        res.status(e.status).send(e)
      } else {
        console.error(e)
        res.status(500).send({ message: 'Something Went Wrong' })
      }
    }
  }
}