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

export default {
  createEvent,
  index
};
