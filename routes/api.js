// Dependecies
var express = require('express');
var router = express.Router();

// Models
var Equipo = require('../models/equipo');
var User = require('../models/user');
//var List = require('../models/list');

// Routes
Equipo.methods(['get','put','post','delete']);
Equipo.register(router,'/equipo');

User.methods(['get','put','post','delete']);
User.register(router,'/user');
//List.methods(['get'])
//List.register(router,'/list');

// Return router
module.exports = router;
