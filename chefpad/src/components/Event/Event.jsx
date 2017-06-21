import React from 'react';

const Event = (props) => {

  return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="text-center"> Chef is cooking {props.event.eventTitle} </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail" style={{"background-color":"#D5D8DC"}}>
              <img src={props.event.firstCoursePictureUrl} alt="first course picture"/>
              <div className="caption">
                <h3>{props.event.firstCourseTitle}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail" style={{"background-color":"#D5D8DC"}}>
              <img src={props.event.secondCoursePictureUrl} alt="second course picture"/>
              <div className="caption">
                <h3>{props.event.secondCourseTitle}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="thumbnail" style={{"background-color":"#D5D8DC"}}>
              <img src={props.event.thirdCoursePictureUrl} alt="third course picture"/>
              <div className="caption">
                <h3>{props.event.thirdCourseTitle}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item list-group-item-success">
                <span className="badge glyphicon glyphicon-time"></span>
                  Time of this dinner event: {props.event.time}
              </li>
              <li className="list-group-item list-group-item-info">
                <span className="badge glyphicon glyphicon-cutlery"></span>
                  Maximum number of dinner mates is {props.event.limitForAttendees}, and the price for this event is ${props.event.price}
              </li>
              <li className="list-group-item list-group-item-success">
                <span className="badge glyphicon glyphicon-road"></span>
                  The addres for this awesome dinner event is: {props.event.address} {props.event.city}
              </li>
            </ul>
          </div>
        </div>
        {props.children}
      </div>
  );
};


export default Event;
