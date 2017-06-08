import React from 'react';
import {Link} from 'react-router-dom';


const ChoosePage = (props) => {

  return (
    <div className="ChoosePage">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Choose if you want to be a chef or an eater :)</h3>
                    </div>
                </div>

                <div className="row text-center">

                    <div className="col-md-5 col-md-offset-1 hero-feature">
                        <div className="thumbnail">
                            <img src={"http://s3.amazonaws.com/bbcgoodfoodme/var/app/current/event_photos/73/original/nathan.png?1476697479"} alt=""/>
                            <div className="caption">
                                <h3>Become a chef</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                <Link to="/chefevent" className='btn btn-primary'>Be a Chef!</Link>                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 hero-feature">
                        <div className="thumbnail">
                            <img src={"https://behealthy.today/wp-content/uploads/2017/03/500-Calorie-diet.jpg"} alt=""/>
                            <div className="caption">
                                <h3>Become an eater</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                  <Link to="/allevents" className='btn btn-primary'>Be an Eater!</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <footer>
                    <div className="row">
                        <div className="col-lg-2 col-lg-offset-10">
                            <p>&copy; ChefPad.com 2017</p>
                        </div>
                    </div>
                </footer>
              </div>
    </div>
  );

}

export default ChoosePage;


