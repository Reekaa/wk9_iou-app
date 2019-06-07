import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class About extends Component {
  constructor(props) {
    super(props)

    this.switchRedirect = this.switchRedirect.bind(this)
  }
  componentDidMount() {
    window.onbeforeunload = function() {
        this.switchRedirect();
    }.bind(this);
  }

  switchRedirect() {
    localStorage.redirect = true
  }

  render() {
    if (localStorage.redirect === "true") {
      return <Redirect to='/' />
    }
    return(
      <div>
        <br></br>
      <h1>IOU <br></br></h1>
        <br></br>
      <h3>This app allows users to keep track of favours that users do for each other. <br></br>
          Favours have a value and the overall value of favours provided by each user is visible to all users.
      </h3>
      </div>
    )}
  }

export default About;
