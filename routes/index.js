const routes = require('express').Router()
const professionalController = require('../controllers/professional')

routes.get('/professional', professionalController.getProfessional)

module.exports = routes