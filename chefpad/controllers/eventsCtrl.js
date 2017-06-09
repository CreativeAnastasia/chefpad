var Event = require('../models/event');

function index(req, res) {
  Event.find({})
  .where('chef').ne(req.user._id)
  .where('eaters').ne(req.user._id)
  .exec().then(events => {
    res.json(events);
  });
}

function showAll(req, res) {
  Event.find({})
  .exec().then(events => {
    res.json(events);
  });
}

function chefEvents(req, res) {
  Event.find({'chef': req.user._id})
  .exec().then(events => {
    res.json(events);
  });
}

function eaterEvents(req, res) {
  Event.find({'eaters': req.user._id})
  .exec().then(events => {
    res.json(events);
  });
}

function showevent(req, res) {
  event.findById(req.body._id).exec().then(event => {
      if (!event) return res.status(401).json({err: 'Problem with event'});
      res.json(event);
  });
}


function createEvent(req, res) {
  var event = new Event(req.body);
  event.chef = req.user._id;
  event.save()
    .then(() => {
      res.json(event);
    })
    // Event data invalid
    .catch(err => {
      console.log("error", err);
      res.status(400).json(err);
    });
}

function attend(req, res) {

  Event.findById(req.params.id).exec()
  .then(event => {
    event.eaters.push(req.user._id);
    return event.save();
  })
  .then(event => {
    res.json(event);
  });
}

function unAttend(req, res) {
  Event.findById(req.params.id).exec()
  .then(event => {
    event.eaters = event.eaters.filter(id => !id.equals(req.user._id));
    event.save().then(() => res.json(event));
  });
}

module.exports = {
  index,
  showAll,
  showevent,
  createEvent,
  attend,
  unAttend,
  chefEvents,
  eaterEvents
};
