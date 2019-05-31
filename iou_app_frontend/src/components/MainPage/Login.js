import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userNameInput: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(evt){
    this.setState({userNameInput: evt.target.value})
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.getCurrentUser(this.state.userNameInput)
  }

  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="entry"
              type="text"
              value={this.state.userNameInput}
              onChange={this.handleInputChange}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="dropdown">
          <button id="taskDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Groups
            <span id="caret" className="caret"></span>
          </button>
          <ul className="dropdown-menu">
          </ul>
        </div>
      </div>
    )
  }

}

export default Login;
