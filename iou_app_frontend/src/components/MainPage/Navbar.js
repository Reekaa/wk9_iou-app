import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: '',
      redirect: false
    };
    this.toggleClass = this.toggleClass.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleClass() {
    if(this.state.active === 'slidein') {
      this.setState({ active: '' });
    } else {
      this.setState({ active: 'slidein' });
    }
  };

  logout() {
    this.props.toggleUser(this.props.user)
    this.props.setCurrentUser({name: null})
    this.toggleClass()
    this.setState({redirect: true})

  }

  render() {
    return(
      <ul className="icon-cont">
        <li id='menu-button' className="dropdown">
          <div className="menu-button" onClick={this.toggleClass}>
            <img className='menuicon' src="/images/menu.png" alt='menuicon'/>
          </div>
          <div id='slider' className={this.state.active}>
            <div className='link-cont' onClick={this.toggleClass}>
              <Link className="link" to="/profile">Profile</Link>
            </div>
            <br/>
            <div className='link-cont' onClick={this.toggleClass}>
              <Link className="link" to="/groups">Groups</Link>
            </div>
            <br/>
            <div className='link-cont' onClick={this.toggleClass}>
              <Link className="link" to="/about">About</Link>
            </div>
            <br/>
            <div className='link-cont logout' onClick={() => {this.logout()}}>
              <Link className="link" to="/">Logout</Link>
            </div>
            <br/>
            <div className="icons">
              <button id="facebook" className="ui circular facebook icon button">
                <i className="facebook icon"></i>
              </button>
              <button id="gmail" className="ui circular google plus icon button">
                <i className="google plus icon"></i>
              </button>
              <button id="insta" className="ui circular instagram icon button">
                <i className="instagram icon"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    )
  }

}





export default Navbar;
