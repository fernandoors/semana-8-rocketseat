const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express()

mongoose.connect('mongodb+srv://semana:semana@cluster0-obts4.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
})
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)