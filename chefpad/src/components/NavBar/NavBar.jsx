import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  let nav = props.user ?
    <div>
      {(props.curPath !== '/choose' && props.curPath !== '/chefevent') && <Link to="/chefevent" className='NavBar-link btn btn-default'>Be a chef</Link>}
      {(props.curPath !== '/choose' && props.curPath !== '/allevents') && <Link to="/allevents" className='NavBar-link btn btn-default'>Be a an eater</Link>}
      {(props.curPath !== '/eaterevents') && <Link to="/eaterevents" className='NavBar-link btn btn-danger'>Your eater events</Link>}
      {(props.curPath !== '/chefevents') && <Link to="/chefevents" className='NavBar-link btn btn-danger'>Your chef events</Link>}
      <Link to="" className='NavBar-link navbar-right btn btn-success' onClick={props.handleLogout} >LOG OUT</Link>
      <span className='NavBar-welcome navbar-right'>Welcome back, {props.user.name}</span>
    </div> :
    <div>
      {(props.curPath !== '/login') && <Link to="/login" className='NavBar-link navbar-right btn btn-success'>LOG IN</Link>}
       &nbsp;&nbsp;&nbsp;&nbsp;
      {(props.curPath !== '/signup') && <Link to="/signup" className='NavBar-link navbar-right btn btn-success'>SIGN UP</Link>}
    </div>;

  return (
    <div className='navbar navbar-default'>
      {nav}
    </div>
  );
};

export default NavBar;

