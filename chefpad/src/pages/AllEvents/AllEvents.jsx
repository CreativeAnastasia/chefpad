import React, {Component} from 'react';
import Event from '../../components/Event/Event';
import eventAPI from '../../utils/eventAPI';


class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eaters: []
    }
  }

  componentDidMount() {
    let self = this;
    eventAPI.index()
      .then(events => self.setState({
        events
      }));
    // eventsAPI.allEvents().then(events => this.setState({events}));
    console.log("after component is mounted events", this.state.events);
  }

  attend = (eventId) => {
    console.log("event id", eventId);
    eventAPI.attend(eventId)
    .then(event => {
      this.props.history.push('/eaterevents');
    })
    .catch(err => {
      console.log("Erro", err);
    });
  }

  render() {
    return (

      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Awesome sauce Eater, choose your event now!</h2>
        </header>

              {this.state.events.map((evt, index) =>
                <Event event={evt} key={index}>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button className="btn btn-danger btn-right" onClick={() => this.attend(evt._id)}>Attend</button>
                    </div>
                  </div>
                </Event>
              )}

        </div>
    );
  };

};

export default AllEvents;
