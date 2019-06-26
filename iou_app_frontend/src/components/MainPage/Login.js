import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm.js'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userNameInput: '',
      redirect: false,
      errorMessage: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInputChange(evt) {
    this.setState({userNameInput: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getCurrentUser(this.state.userNameInput, this.props.users)
    for (let user of this.props.users) {
      if (user.name == this.state.userNameInput){
        this.setState({redirect: true})
      }
      else {
        this.setState({errorMessage: 'Sorry - user not found!'})
      }
    }
  }

  handleClick(evt) {
    console.log('button clicked');
  }

  renderSignUp(){

  }


  render(){
    if (this.state.redirect) {
      return <Redirect to='/profile'/>
    }
    return(
      <div className="login-page">
        <div className="login">
          <label htmlFor="entry">Login with your username</label>
          <form onSubmit={this.handleSubmit}>
            <input
              id="entry"
              type="text"
              value={this.state.userNameInput}
              onChange={(evt) => {this.handleInputChange(evt)}}
            />
            <input id="submit" type="submit" value="Login" />
          </form>
        </div>
        <div id='invalidInput' className="invalidInput">{this.state.errorMessage}</div>
        <div id='signUp'>
        <div>
        Don't have an account?
        </div>
        <div id='signUpLink' onClick={this.handleClick}>
        Sign up here!
        </div>
        <SignUpForm/>
        </div>
        <div className="slogen">
          Build a community of people that help each other!
        </div>
      </div>
    )
  }

}

export default Login;
