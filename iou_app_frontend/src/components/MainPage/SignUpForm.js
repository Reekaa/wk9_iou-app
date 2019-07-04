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
      userprofile: '',
      formState: ''
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
    this.formCompletion();
    this.resetForm();
  };



  resetForm () {
    this.setState({
      name: '',
      skill: '',
      userprofile: '',

    })
  }

  submitConfirmation() {
    if (this.state.formState === 'complete') {
          return(
            <div id='validInput' className="validInput">
            Your registration was successful!
            </div>

          )}
      else if(this.state.formState === 'incomplete'){
        return(
          <div id='invalidInput' className="invalidInput">
          Please complete all of the form
          </div>
        )
      }
      else{
        return null
      }
  }

  formCompletion(){
    if (this.state.name != '' && this.state.skill != '' && this.state.userprofile != '') {
      this.setState({formState: 'complete'})
    }
      else{
        this.setState({formState: 'incomplete'})
      }
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
      {this.submitConfirmation()}
      <input id="submit" type="submit" value="Sign Up" onClick={this.handleFormSubmit} />
    </form>
  </div>
)}
return null
}
}

export default SignUpForm;
