var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
var eventsCtrl = require('../../controllers/eventsCtrl');

router.get('/allevents', eventsCtrl.index);
router.get('/all', eventsCtrl.showAll);
router.get('/dinnerevent', eventsCtrl.showevent);
router.get('/chef', eventsCtrl.chefEvents);
router.get('/:id/remove', eventsCtrl.deleteEvent);
router.get('/eater', eventsCtrl.eaterEvents);
router.post('/chefevent', eventsCtrl.createEvent);
router.post('/:id/attend', eventsCtrl.attend);
router.get('/:id/unattend', eventsCtrl.unAttend);

module.exports = router;
