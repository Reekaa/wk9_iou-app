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
      userprofile: ''
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
      userprofile: this.state.userprofile,
      groups: [{
          groupName: 'SW2',
          karma: 0,
          completedTasks: [],
      }],
      avatar: "./images/avatar.jpeg"
    };
    this.props.createNewUser(newUser);
    this.resetForm();
  };



  resetForm () {
    this.setState({
      name: '',
      skill: '',
      userprofile: '',

    })
  }

  render(){
    if(this.props.showSignUp){
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
        id='userprofile'
        value={this.state.userprofile}
        onChange={this.handleInputChange}>
      </input>
      <input id="submit" type="submit" value="Sign Up" onClick={this.handleFormSubmit} />
    </form>
  </div>
)}
return null
}
}

export default SignUpForm;
