var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema( {
  chef: {type: Schema.Types.ObjectId, ref: 'User'},
  eaters: [{type: Schema.Types.ObjectId, ref: 'User'}],
  time: {type: String, required: true},
  city: {type: String, required: true},
  address: {type: String},
  eventTitle: { type: String, required: true },
  firstCourseTitle: { type: String, required: true },
  firstCoursePictureUrl: { type: String, default: "https://i.imgur.com/Tqz4DsT.png" },
  secondCourseTitle: { type: String, required: true },
  secondCoursePictureUrl: { type: String, default: "https://i.imgur.com/Tqz4DsT.png" },
  thirdCourseTitle: { type: String, required: true },
  thirdCoursePictureUrl: { type: String, default: "https://i.imgur.com/Tqz4DsT.png" },
  price: Number,
  limitForAttendees: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);

