import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userNameInput: '',
      redirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(evt) {
    this.setState({userNameInput: evt.target.value})
  }
//
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.getCurrentUser(this.state.userNameInput)
    this.setState({redirect: true})
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
        <div className="slogen">
          Build a community of people that help each other!
        </div>
      </div>
    )
  }

}

export default Login;


// if props.currentuser is not null the render the redirect
// if(this.props.currentUser === {} ){
  //   return <Redirect to='/mainpage' />
  // }
