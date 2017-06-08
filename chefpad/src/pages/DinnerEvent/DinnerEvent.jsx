import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class DinnerEvent extends Component {

  render() {
    return (
<div>
        <Link to='/'>Cancel</Link>
  <div className="container">
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center"> Chef is cooking {this.props.event.eventTitle} </h2>
        </div>
      </div>
        <div className="row">
            <ul className="thumbnails">
                    <ol className="col-md-4">
                      <div className="thumbnail">
                        <img src={this.props.event.firstCoursePictureUrl} alt="first course picture"/>
                        <div className="caption">
                          <h3>{this.props.event.firstCourseTitle}</h3>
                        </div>
                      </div>
                    </ol>

                      <ol className="col-md-4">
                      <div className="thumbnail">
                        <img src={this.props.event.secondCoursePictureUrl} alt="second course picture"/>
                        <div className="caption">
                          <h3>{this.props.event.secondCourseTitle}</h3>
                        </div>
                      </div>
                    </ol>

                      <ol className="col-md-4">
                      <div className="thumbnail">
                        <img src={this.props.event.thirdCoursePictureUrl} alt="third course picture"/>
                        <div className="caption">
                          <h3>{this.props.event.thirdCourseTitle}</h3>
                        </div>
                      </div>
                    </ol>
                </ul>
              </div>

                <div className="row">
                  <div className="col-md-8">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-success">
                          <span className="badge glyphicon glyphicon-time">&#9716;</span>
                            Time of this dinner event: {this.props.event.time}
                        </li>

                        <li className="list-group-item list-group-item-info">
                          <span className="badge glyphicon glyphicon-cutlery">&#8987;</span>
                            Maximum number of dinner mates and price for this event: {this.props.event.limitForAttendees} {this.props.event.price}
                        </li>

                        <li className="list-group-item list-group-item-success">
                          <span className="badge glyphicon glyphicon-road">&#8987;</span>
                            The addres for this awesome dinner event is: {this.props.event.address} {this.props.event.city}
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
};
export default DinnerEvent;
