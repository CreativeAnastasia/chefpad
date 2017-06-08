var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/eventsCtrl');

router.get('/allevents', eventsCtrl.index);
router.get('/dinnerevent', eventsCtrl.showevent);
router.post('/chefevent', eventsCtrl.createEvent);
router.post('/:id/attend', eventsCtrl.attend);

module.exports = router;
