import LoginMiddle from './LoginMiddle.js';
import Login from './Login.js';
import SignUpForm from './SignUpForm.js';
import React, {Component} from 'react';

class LogInPage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <LoginMiddle
          users={this.props.users}
          setCurrentUser={this.props.setCurrentUser}
          getCurrentUser={this.props.getCurrentUser}
          setGroupUsers={this.props.setGroupUsers}
        />
        <SignUpForm/>
      </div>
    )
  }
}
export default LogInPage
