import React, {Component} from "react";
import './mainpage.css'
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import NewTask from './NewTask'
import { Redirect } from 'react-router-dom';


class Main extends Component {
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

  userListSidebarHeight() {
    return (`${((this.props.groupUsers.length * 40) + 120)}px`)
  }

  render() {
    if (localStorage.redirect === "true") {
      console.log(localStorage);
      return <Redirect to='/' />
    }
    return(
      <div className='main-container-grid'>
      <div className='main-container'>
      <NewTask object={this.props}/>
      </div>
      <div className='user-list-sidebar' style={{ height: `${this.userListSidebarHeight()}` }}>
      <ViewGroupUsersContainer />
      </div>
      </div>
    )
  }
};

export default Main;
