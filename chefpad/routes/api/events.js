var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/eventsCtrl');

router.get('/', eventsCtrl.index);
router.post('/chefevent', eventsCtrl.createEvent);

module.exports = router;
