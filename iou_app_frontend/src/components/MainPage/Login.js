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
        <form>
          <input
            id="entry"
            type="text"
            value={this.state.userNameInput}
            
          />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default Login;
