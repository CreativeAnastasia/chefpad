const BASE_URL = '/api/events/';

function createEvent(event) {
  console.log("apievent",event)
  return fetch(BASE_URL + 'chefevent', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(event)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Something went wrong!');
  })
  .then(data => {
    data
  });
}

export default {
  createEvent
};
