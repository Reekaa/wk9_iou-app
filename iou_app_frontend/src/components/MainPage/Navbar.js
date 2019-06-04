import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'slidein',
    };
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    if(this.state.active === 'slidein') {
      this.setState({ active: '' });
    } else {
      this.setState({ active: 'slidein' });
    }
  };

  render() {
    return(
      <ul className="icon-cont">
        <li id='menu-button' className="dropdown">
          <div className="menu-button" onClick={this.toggleClass}><img className='menuicon' src="/images/menu.png"/></div>
          <div id='slider' className={this.state.active} >
            <div className='link-cont'><Link className="link" to="/newtask">New Task</Link></div>
            <br/>
            <div className='link-cont'><Link className="link" to="/profile">Profile</Link></div>
            <br/>
            <div className='link-cont'><Link className="link" to="/groups">Groups</Link></div>
            <br/>
            <div className='link-cont'><Link className="link" to="/voting">Voting</Link></div>
            <br/>
            <div className='link-cont'><Link className="link" to="/about">About</Link></div>
            <br/>
            <div className='link-cont'><Link className="link" to="/">Logout</Link></div>
          </div>
        </li>
      </ul>
    )
  }

}





export default Navbar;
