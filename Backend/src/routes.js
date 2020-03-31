//Criação de variáveis para importação dos controllers e módulos.
const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Importação das Routes responsáveis pelo CRUD.
routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

//Exportando as Routes
module.exports = routes;