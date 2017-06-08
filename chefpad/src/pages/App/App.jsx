import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import userService from '../../utils/userService';
import eventService from '../../utils/eventService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import ChoosePage from '../ChoosePage/ChoosePage';
import ChefEvent from '../ChefEvent/ChefEvent';
import AllEvents from '../AllEvents/AllEvents';
import DinnerEvent from '../DinnerEvent/DinnerEvent';
import EaterEvent from '../EaterEvent/EaterEvent';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {}
    );
  }

  /*---------- Callback Methods ----------*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }


  handleCreateEvent = (event) => {
    this.setState({event});
  }

  handleLogin = () => {
      this.setState({user: userService.getUser()});
    }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    console.log('componentt mounted')
    let user = userService.getUser();
    this.setState({user});
    // let event = eventService.createEvent();
    // this.setState({event});

  }
  render() {
    return (
      <div>
        <NavBar
          curPath={window.location.pathname}
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
        <Route exact path='/' render={() =>
          <HomePage
            user={this.state.user}
          />
          }/>
          <Route exact path='/signup' render={(props) =>
            <SignupPage
              {...props}
              handleSignup={this.handleSignup}

            />
          }/>
          <Route exact path='/login' render={(props) =>
            <LoginPage
              {...props}
              handleLogin={this.handleLogin}
            />
          }/>
          <Route exact path='/choose' component={ChoosePage} />

          <Route exact path='/chefevent' render={(props) =>
            <ChefEvent
              user={this.state.user}
              {...props}
              handleCreateEvent={this.handleCreateEvent}
            />
          }/>

          <Route exact path='/allevents' render={(props) =>
            <AllEvents
              {...props}
              user={this.state.user}
              events={this.state.events}
              />
            }/>

          <Route exact path='/eaterevent' render={(props) =>
            <EaterEvent
              user={this.state.user}
            />
          }/>

          <Route exact path='/dinnerevent' render={(props) =>
            <DinnerEvent
              {...props}
              user={this.state.user}
              event={this.state.event}
            />
          }/>

        </Switch>
      </div>
    );
  }
}

export default App;
