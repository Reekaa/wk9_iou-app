import React, { Component } from 'react';
import Login from './Login.js';
import './SignUpForm.css';
import { connect } from 'react-redux';

class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      skill: '',
      userProfile: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange (event) {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  handleFormSubmit (event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      skill: this.state.skill,
      userProfile: this.state.userProfile
    };
    this.createNewUser(newUser);
    this.resetForm();
  };



  resetForm () {
    this.setState({
      name: '',
      skill: '',
      userProfile: ''
    })
  }

  render(){
    return(
  <div className = 'sign-up'>
    <form className = 'sign-up-form'>
      <label>Name:</label>
      <input
        className= 'entry'
        type='text'
        id='name'
        value={this.state.name}
        onChange={this.handleInputChange}
      >
      </input>
      <label>Skill:</label>
      <input
        className= 'entry'
        type='text'
        id='skill'
        value={this.state.skill}
        onChange={this.handleInputChange}
      >
      </input>
      <label>Profile Description:</label>
      <input
        className= 'entry'
        type='text'
        id='userProfile'
        value={this.state.userProfile}
        onChange={this.handleInputChange}>
      </input>
      <input id="submit" type="submit" value="Sign Up" onClick={this.handleFormSubmit} />
    </form>
  </div>
)}
}

export default SignUpForm
