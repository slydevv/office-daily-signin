const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const Router = express.Router()
const {registerUsers, loginUsers, getUser} = require('../controller/authControl')


Router.post('/register', registerUsers)
Router.post('/login', loginUsers)
Router.get('/user', requireAuth, getUser)


module.exports = Router