import React, {Component} from 'react';
import eventAPI from '../../utils/eventAPI';
import Event from '../../components/Event/Event';

class EaterEvent extends Component {
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
    eventAPI.getUsersEvents(false)
      .then(events => self.setState({
        events
      }));
  }

  unAttend = (eventId) => {
    eventAPI.unAttend(eventId)
    .then(event => {
      this.setState({
        events: this.state.events.filter(event => event._id !== eventId)
      });
    })
    .catch(err => {
      console.log("Erro", err);
    });
  }

  render() {
    return (
      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Here are your events you are attending</h2>
        </header>
        {this.state.events.map((evt, index) =>
          <Event event={evt} key={evt._id}>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-danger btn-right" onClick={() => this.unAttend(evt._id)}>Unattend it</button>
            </div>
          </div>
        </Event>
        )}
      </div>
    );
  }

};

export default EaterEvent;
