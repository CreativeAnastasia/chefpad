var Event = require('../models/event');

function index(req, res) {
  console.log("events in the controller");
  Event.find({})
  .where('chef').ne(req.user._id)
  .where('eaters').ne(req.user._id)
  .exec().then(events => {
    res.json(events);
  });
}

function showevent(req, res) {
  event.findOne({_id: req.body._id}).exec().then(event => {
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

module.exports = {
  index,
  showevent,
  createEvent,
  attend
};
