import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
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

  handleLogin = () => {
      this.setState({user: userService.getUser()});
    }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }
  render() {
    return (
      <div>
          <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              user={this.state.user}
              handleLogout={this.handleLogout}
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
          </Switch>
      </div>
    );
  }
}

export default App;