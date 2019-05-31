import React, { Component } from 'react';

class Login extends Component {

  constructor(props){
    super(props)
    this.state ={
      userNameInput: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
  }


 /*onSubmit={this.handleSubmit}*/
/*onChange={this.handleInputChange}*/
  render(){
    return(
      <div>
        <div>
          <form>
            <input
              id="entry"
              type="text"
              value={this.state.userNameInput}

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
