import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <div className="nav">
      <ul className="nav-links">
        <li><Link className="link" to="/">Login</Link></li>
        <li><Link className="link" to="/mainpage">Main Page</Link></li>
        <li><Link className="link" to="/profile">Profile</Link></li>
        <li><Link className="link" to="/groups">Groups</Link></li>
        <li><Link className="link" to="/voting">Voting</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/">Logout</Link></li>
      </ul>
    </div>
)

export default Navbar;
