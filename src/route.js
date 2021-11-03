const express = require('express')

const DroneController = require('./controllers/drones_controller')

const FlyController = require('./controllers/fly_controller')

const FlyStatusController = require('./controllers/status_controller')

const route = express.Router()

/*Controle dos drones */
route.get('/drone', DroneController.getAll)

/*Controle dos Vôos */
route.get('/fly', FlyController.getAll)

/*Controle dos Status dos Vôos */
route.get('/drone/status', FlyStatusController.getAll)

module.exports = route