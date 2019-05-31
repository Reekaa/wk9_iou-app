import React from "react";
import './mainpage.css';
import Navbar from './Navbar.js';

const Header = props => {
  return (
    <div className='header-container'>
      <div className='main-page-head'>
        <div className='current-user'>User: {props.currentUser.name}</div>
        <img src='./images/top_banner.png' alt='top_banner' className='header-image'></img>
        <div className='spacer'></div>
      </div>
        <Navbar/>
    </div>
  );
}

export default Header
