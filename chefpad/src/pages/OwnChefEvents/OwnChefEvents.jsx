import React, {Component} from 'react';
import eventAPI from '../../utils/eventAPI';
import Event from '../../components/Event/Event';

class OwnChefEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    // make API call to fetch eater events
    // then setState with those events
    let self = this;
    eventAPI.getUsersEvents(true)
      .then(events => self.setState({
        events
      }));
  }

  deleteEvent = (eventId) => {
    eventAPI.deleteEvent(eventId)
    .then(events => {
      this.setState({events});
    })
    .catch(err => {
      console.log("Erro", err);
    });

  }

  render() {
    return (
      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Here are your events you created as a chef!</h2>
        </header>
        {this.state.events.map((evt) =>
          <Event event={evt} key={evt._id}>
            <div className="row">
              <div className="col-md-12 text-center">
                <button className="btn btn-danger btn-right" onClick={() => this.deleteEvent(evt._id)}>Remove it</button>
              </div>
            </div>
          </Event>
        )}
      </div>
    );
  }

};

export default OwnChefEvents;

