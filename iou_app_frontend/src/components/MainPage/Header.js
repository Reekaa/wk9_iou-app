import React from "react";
import './mainpage.css'

const Header = props => {
  console.log(props.currentUser);
  return (
    <div className='main-page-head'>
      <div className='current-user'>User: {props.currentUser}</div>
      <img src='./images/top_banner.png' alt='top_banner' className='header-image'></img>
      <div className='spacer'></div>
    </div>
  );
}

export default Header
