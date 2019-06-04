import React from "react";
import './mainpage.css';
import Navbar from './Navbar.js';

const Header = props => {
  return (
    <div className='header-container'>
      <div className='main-page-head'>
        <Navbar user={props.currentUser} toggleUser={props.toggleCurrentUser}/>
        <img src='./images/top_banner.png' alt='top_banner' className='header-image'></img>
        <div className='spacer'></div>
      </div>
    </div>
  );
}

export default Header
