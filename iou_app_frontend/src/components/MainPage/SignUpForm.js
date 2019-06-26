import React from 'react';
import Login from './Login.js';
import './SignUpForm.css';

const SignUpLink = () => {
    return(
  <div className = 'sign-up'>
  <form className = 'sign-up-form'>
  <label>Username:</label>
  <input className= 'entry' type='text'></input>
  <label>Skill:</label>
  <input className= 'entry' type='text'></input>
  <label>Profile Description:</label>
  <input className= 'entry' type='text'></input>
  <input id="submit" type="submit" value="Sign Up" />
  </form>
  </div>
)}

export default SignUpLink
