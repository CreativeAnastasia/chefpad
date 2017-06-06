import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import userService from '../../utils/userService';
import SettingsPage from '../SettingsPage/SettingsPage';
import SignupPage from '../SignupPage/SignupPage';
import HomePage from './HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
