const express = require('express')
const studecontroller = require('./Controller')
const route = express.Router()

route.get('/findall',studecontroller.showdetail)

route.post('/register',studecontroller.adduser)

route.put('/update/:fname',studecontroller.updatedata)

route.delete('/delete/:fname',studecontroller.deleteuser)

route.post('/login/:fname',studecontroller.login)


module.exports = route
