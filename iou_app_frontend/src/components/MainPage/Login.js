import React, { Component } from 'react';
import './Login.css'
// import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userNameInput: '',
      // redirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setRedirect = this.setRedirect.bind(this)
  }

  handleInputChange(evt) {
    this.setState({userNameInput: evt.target.value})
  }
//
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getCurrentUser(this.state.userNameInput)
    // this.setRedirect()
  }

  // setRedirect() {
  //   this.setState({redirect: true})
  // }

  render(){
    // if (this.state.redirect && this.handleSubmit) {
    //   return <Redirect to='/mainpage' />
    // }
    return(
      <div className="login">
        <label htmlFor="entry">Login with your username</label>
        <form onSubmit={this.handleSubmit}>
          <input
            id="entry"
            type="text"
            value={this.state.userNameInput}
            onChange={(evt) => {this.handleInputChange(evt)}}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

export default Login;
