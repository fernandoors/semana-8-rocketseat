const express = require('express')
const DevController = require('./controllers/Dev')
const LikesController = require('./controllers/Like')
const DislikesController = require('./controllers/Dislikes')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Ola mundo! ' + req.query.name)
})
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikesController.store)
routes.post('/devs/:devId/dislikes', DislikesController.store)

module.exports = routes