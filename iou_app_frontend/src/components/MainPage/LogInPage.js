import LoginMiddle from './LoginMiddle.js';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import React, { Component } from 'react';

class LogInPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignUp: false
    }
    this.signUp = this.signUp.bind(this)
  };

  signUp(){
    if (this.state.showSignUp) {
      this.setState({showSignUp: false})
    }
    else {
      this.setState({showSignUp: true})
    }
  };

  render(){
    return(
      <div>
        <LoginMiddle
          users={this.props.users}
          setCurrentUser={this.props.setCurrentUser}
          getCurrentUser={this.props.getCurrentUser}
          setGroupUsers={this.props.setGroupUsers}
          signUp = {this.signUp}
        />
        <SignUpForm
          createNewUser = {this.props.createNewUser}
          showSignUp = {this.state.showSignUp}
        />
      </div>
    )
  }
};

export default LogInPage
