const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

let connectedUsers = {}

io.on('connection', socket => {
  const { user } = socket.handshake.query
  connectedUsers[user] = socket.id
})
mongoose.connect('mongodb+srv://semana:semana@cluster0-obts4.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})
app.use((req, res, next)=>{
  req.io = io
  req.connectedUsers = connectedUsers
  
  return next();
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)