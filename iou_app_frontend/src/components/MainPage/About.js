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
      <h3>App description</h3>
      </div>
    )}
  }

export default About;
