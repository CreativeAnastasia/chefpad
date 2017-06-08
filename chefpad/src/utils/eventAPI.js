import tokenService from './tokenService';
const BASE_URL = '/api/events/';

function createEvent(event) {
  return fetch(BASE_URL + 'chefevent', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify(event)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong!');
  })
  .then(event => event);
}

function attend(eventId) {
   console.log("eventId in api", eventId);
  return fetch(BASE_URL + eventId + '/attend', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify({})
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong!');
  })
  .then(eventId => eventId);
}

// returns events where user not a chef or eater
function index() {
  return fetch(BASE_URL + 'allevents', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
  })
  .then(res => {
    if (res.ok) return  res.json();
    throw new Error('Error');
  })
  .then(events => events);
}

function getUsersEvents(isChef) {
  const url = BASE_URL + (isChef ? 'chef' : 'eater');
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
  })
  .then(res => {
    if (res.ok) return  res.json();
    throw new Error('Error');
  })
  .then(events => events);
}

export default {
  createEvent,
  attend,
  index,
  getUsersEvents
};
