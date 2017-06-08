import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventService from '../../utils/eventService';


class ChefEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    time: '12:00',
    city: 'LosAn',
    address: '123Main',
    eventTitle: 'Italian',
    firstCourseTitle: 'fist course',
    firstCoursePictureUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
    secondCourseTitle: 'second course',
    secondCoursePictureUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
    thirdCourseTitle: 'third',
    thirdCoursePictureUrl: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
    price: '25',
    limitForAttendees: '5'
    };
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleCreateEvent = (e) => {
    e.preventDefault()
    let self = this;
    eventService.createEvent(this.state)
      .then(event => {
        this.props.handleCreateEvent(event);
        self.props.history.push('/dinnerevent');
      })
      .catch(() => {
        console.log("error!");
      });
  }

  render() {
  return (
    <div className="ChefEvent">
            <div className="container">

                <header className="thumbnail">
                    <h2 className="text-center">Awesome Chef, host your event now!</h2>
                </header>

                  <div className="col-md-12">
                    <div className="panel panel-success">
                      <header className="panel-heading text-center">Create an event</header>
                      <div className="panel-body">
                        <form className="form" onSubmit={this.handleCreateEvent}>

                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="text" className="form-control" placeholder="Event title" value={this.state.eventTitle} onChange={(e) => this.handleChange('eventTitle', e)} />
                              </div>

                              <div className="form-group col-xs-6">
                                <input type="city" className="form-control" placeholder="Event city" value={this.state.city} onChange={(e) => this.handleChange('city', e)} />
                              </div>
                          </div>


                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="firstCourseTitle" className="form-control" placeholder="First Course Title" value={this.state.firstCourseTitle} onChange={(e) => this.handleChange('firstCourseTitle', e)} />
                              </div>

                              <div className="form-group col-xs-6">
                                <input type="firstCoursePictureUrl" className="form-control" placeholder="Upload Your picture URL" value={this.state.firstCoursePictureUrl} onChange={(e) => this.handleChange('firstCoursePictureUrl', e)} />
                              </div>
                          </div>


                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="secondCourseTitle" className="form-control" placeholder="Second Course Title" value={this.state.secondCourseTitle} onChange={(e) => this.handleChange('secondCourseTitle', e)} />
                              </div>

                              <div className="form-group col-xs-6">
                                <input type="secondCoursePictureUrl" className="form-control" placeholder="Upload Your picture URL" value={this.state.secondCoursePictureUrl} onChange={(e) => this.handleChange('secondCoursePictureUrl', e)} />
                              </div>
                          </div>


                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="thirdCourseTitle" className="form-control" placeholder="Third Course Title" value={this.state.thirdCourseTitle} onChange={(e) => this.handleChange('thirdCourseTitle', e)} />
                              </div>

                              <div className="form-group col-xs-6">
                                <input type="thirdCoursePictureUrl" className="form-control" placeholder="Upload Your picture URL" value={this.state.thirdCoursePictureUrl} onChange={(e) => this.handleChange('thirdCoursePictureUrl', e)} />
                              </div>
                          </div>


                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="time" className="form-control" placeholder="Time for your Event" value={this.state.time} onChange={(e) => this.handleChange('time', e)} />
                            </div>

                              <div className="form-group col-xs-6">
                                <input type="address" className="form-control" placeholder="Address for your Event" value={this.state.address} onChange={(e) => this.handleChange('address', e)} />
                              </div>
                          </div>


                          <div className="row">
                            <div className="form-group col-xs-6">
                                <input type="price" className="form-control" placeholder="Price $$" value={this.state.price} onChange={(e) => this.handleChange('price', e)} />
                              </div>

                              <div className="form-group col-xs-6">
                                <input type="limitForAttendees" className="form-control" placeholder="How many people you want to host" value={this.state.limitForAttendees} onChange={(e) => this.handleChange('limitForAttendees', e)} />
                              </div>
                          </div>


                            <div className="row">
                              <div className="form-group col-xs-6 col-xs-offset-3">
                                <button className="btn btn-success btn-block">Publish your awesome event NOW!</button>
                                <Link to='/choose'>Cancel</Link>
                              </div>
                            </div>

                        </form>
                      </div>
                  </div>
                </div>


            </div>
    </div>
  );

}
};

export default ChefEvent;

