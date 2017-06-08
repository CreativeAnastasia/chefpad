import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventAPI from '../../utils/eventAPI';


class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
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
    eventAPI.attend(eventId)
    .then(event => {

    });
  }

  render() {
    return (

    <div>
      <h2>Awesome sauce Eater, choose your event now!</h2>

        <div className="container">

              {this.state.events.map(event =>
                <div>
                  <div className="jumbotron">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                      <h2 className="text-center"> Chef is cooking {event.eventTitle} </h2>
                    </div>
                  </div>

                  <div className="row">
                              <div className="col-md-4">
                                <div className="thumbnail">
                                  <img src={event.firstCoursePictureUrl} alt="first course picture"/>
                                  <div className="caption">
                                    <h3>{event.firstCourseTitle}</h3>
                                  </div>
                                </div>
                              </div>

                                <div className="col-md-4">
                                <div className="thumbnail">
                                  <img src={event.secondCoursePictureUrl} alt="second course picture"/>
                                  <div className="caption">
                                    <h3>{event.secondCourseTitle}</h3>
                                  </div>
                                </div>
                              </div>

                                <div className="col-md-4">
                                <div className="thumbnail">
                                  <img src={event.thirdCoursePictureUrl} alt="third course picture"/>
                                  <div className="caption">
                                    <h3>{event.thirdCourseTitle}</h3>
                                  </div>
                                </div>
                              </div>
                     </div>

                      <div className="row">
                        <div className="col-md-8">
                          <ul className="list-group">
                              <li className="list-group-item list-group-item-success">
                                <span className="badge glyphicon glyphicon-time">&#9716;</span>
                                  Time of this dinner event: {event.time}
                              </li>

                              <li className="list-group-item list-group-item-info">
                                <span className="badge glyphicon glyphicon-cutlery">&#8987;</span>
                                  Maximum number of dinner mates and price for this event: {event.limitForAttendees} {event.price}
                              </li>

                              <li className="list-group-item list-group-item-success">
                                <span className="badge glyphicon glyphicon-road">&#8987;</span>
                                  The addres for this awesome dinner event is: {event.address} {event.city}
                              </li>
                          </ul>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-1 col-md-offset-11">
                          <button className="btn btn-danger btn-right" onClick={() => this.attend(event._id)}>Attend</button>
                        </div>
                      </div>
                  </div>
                </div>
              )}
            <Link to='/choose'>Cancel</Link>
         </div>
      </div>
    );
  };

};

export default AllEvents;
