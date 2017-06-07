var Event = require('../models/event');

function index(req, res) {
  Event.find({}).exec().then(events => {
    res.json(events);
  });
}

function createEvent(req, res) {
  var event = new Event(req.body);
  console.log ("event", event);
  event.save()
    // Event data invalid
    .catch(err => res.status(400).json(err));
}

module.exports = {
  index,
  createEvent
};
