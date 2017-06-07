var Event = require('../models/event');

function index(req, res) {
  Event.find({}).exec().then(events => {
    res.json(events);
  });
}

function createEvent(req, res) {
  console.log("req.body", req.body);
  var event = new Event(req.body);
  console.log('------')
  console.log ("hello event", event);
  console.log('------')
  event.save()
    // Event data invalid
    .catch(err => {
      console.log("error", err);
;      res.status(400).json(err)
    });

}

module.exports = {
  index,
  createEvent
};
