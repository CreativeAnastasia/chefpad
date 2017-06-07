import eventAPI from './eventAPI';

function createEvent(event) {
  return eventAPI.createEvent(event)
}

export default {
  createEvent
}

