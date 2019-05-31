import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <div className="navbar">
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/">Main Page</Link>
      <Link className="link" to="/userprofile">User Profile</Link>
      <Link className="link" to="/groups">Groups</Link>
      <Link className="link" to="/voting">Voting</Link>
      <Link className="link" to="/logout">Logout</Link>
    </div>
)

export default Navbar;
