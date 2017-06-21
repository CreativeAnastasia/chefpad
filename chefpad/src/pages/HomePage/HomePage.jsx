import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = (props) => {

  return (
    <div className="HomePage">
            <div className="container">

                <header className="jumbotron hero-spacer">
                    <h1 className="text-center">Welcome to a ChefPad!</h1>
                    <p>It is a web app that enables people to host their dinner events and/or attend any available dinner events going on in the nearest area. Here is how it works...</p>
                </header>


                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src={"http://www.jwfoodandwine.com/sites/default/files/styles/flexslider_full/public/kim_kushner.jpg?itok=ZknJYwT4"} alt=""/>
                            <div className="caption">
                                <h3>Step 1</h3>
                                <p>If you want to share your cooking creations with others, become a chef.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src={"http://www.mariasfarmcountrykitchen.com/wp-content/uploads/2015/09/How-to-Feed-Your-Friends-Even-If-You%E2%80%99re-Broke-Uninspired-or-Never-Cook-Lentil-Soup-Dinner-Party-Recipe.jpg"} alt=""/>
                            <div className="caption">
                                <h3>Step 2</h3>
                                <p>Cook a delicious dinner, and post it on the site indicating how many people you would like to host.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src={"https://www.lifeillinois.org/wp-content/uploads/2016/10/dinner-table-group-800x500.jpg"} alt=""/>
                            <div className="caption">
                                <h3>Step 3</h3>
                                <p>Set time, place, and price. Also share you awesome pictures do you can attract cool foodies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src={"http://www.mariasfarmcountrykitchen.com/wp-content/uploads/2009/08/10-Tips-for-Sober-Entertaining.jpg"} alt=""/>
                            <div className="caption">
                                <h3>Step 4</h3>
                                <p>If you are simply a curious foodie, choose from many chefs ans attend their hosted dinner. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Link to="/all" className='NavBar-link btn-lg btn-primary'>Check out all events...</Link>
                    </div>
                </div>

                <footer>
                    <div className="row">
                        <div className="col-md-2 col-md-offset-10">
                            <p>&copy; ChefPad.com 2017</p>
                        </div>
                    </div>
                </footer>
              </div>
    </div>
  );

}

export default HomePage;

