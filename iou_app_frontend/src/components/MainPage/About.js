import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.switchRedirect = this.switchRedirect.bind(this)
  }
  componentDidMount() {
    window.onbeforeunload = function() {
        this.switchRedirect();
    }.bind(this);
  }

  switchRedirect() {

    localStorage.redirect = true
    this.setState({redirect: !this.state.redirect})
    console.log(localStorage);
  }

  render() {
    if (localStorage.redirect === "true") {
      console.log(localStorage);
      return <Redirect to='/' />
    }
    return(
      <div>
      <h3>App description</h3>
      </div>
    )}
  }

export default About;
