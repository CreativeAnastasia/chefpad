import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to="/chefevent" className='NavBar-link btn btn-default'>Be a chef</Link>
      <Link to="/allevents" className='NavBar-link btn btn-default'>Be an eater</Link>
      <Link to="" className='NavBar-link navbar-right btn btn-success' onClick={props.handleLogout} >LOG OUT</Link>
      <span className='NavBar-welcome navbar-right'>Welcome back, {props.user.name}</span>
    </div> :
    <div>
      {props.curPath !== '/login' ? <Link to="/login" className='NavBar-link navbar-right btn btn-success'>LOG IN</Link> : null}
       &nbsp;&nbsp;&nbsp;&nbsp;
      {props.curPath !== '/signup' ? <Link to="/signup" className='NavBar-link navbar-right btn btn-success'>SIGN UP</Link> : null}
    </div>;

  return (
    <div className='navbar navbar-default'>
      {nav}
    </div>
  );
};

export default NavBar;

