import eventAPI from './eventAPI';

function createEvent(event) {
  console.log("creating event",event)
  return eventAPI.createEvent(event)
}

export default {
  createEvent
}

