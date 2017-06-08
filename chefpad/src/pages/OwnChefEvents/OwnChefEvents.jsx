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

  render() {
    return (
      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Here are your events you are created as a chef!</h2>
        </header>
        {this.state.events.map((evt) =>
          <Event event={evt} />
        )}
      </div>
    );
  }

};

export default OwnChefEvents;

