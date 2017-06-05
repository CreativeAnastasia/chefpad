var express = require('express');
var Router = express.Router();
var eventsCtrl = require('../controllers/eventsCtrl');

Router.get('/', eventsCtrl.index);
