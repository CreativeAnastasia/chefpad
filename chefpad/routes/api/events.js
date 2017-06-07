var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/eventsCtrl');

router.post('/chefevent', eventsCtrl.createEvent);
router.get('/', eventsCtrl.index);

module.exports = router;
