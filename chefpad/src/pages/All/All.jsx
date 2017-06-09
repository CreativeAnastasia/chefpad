import React, {Component} from 'react';
import Event from '../../components/Event/Event';
import eventAPI from '../../utils/eventAPI';


class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    let self = this;
    eventAPI.showAll()
      .then(events => self.setState({
        events
      }));
  }

  render() {
    return (
      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Here are all the events going on right now....</h2>
        </header>
        {this.state.events.map((evt, index) =>
          <Event event={evt} key={index}/>
        )}
      </div>

    );
  };
};


  export default All;

