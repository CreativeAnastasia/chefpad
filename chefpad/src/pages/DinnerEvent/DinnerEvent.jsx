import React, {Component} from 'react';
import Event from '../../components/Event/Event';


class DinnerEvent extends Component {

  render() {
    return (
      <div className="container">
        <header className="thumbnail">
          <h2 className="text-center">Congrats, you just published your event</h2>
        </header>
        <Event event={this.props.event} />
      </div>
    );
  }
};
export default DinnerEvent;
