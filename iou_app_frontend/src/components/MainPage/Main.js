import React, {Component} from "react";
import './mainpage.css'
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
// import UserProfile from '../UserProfilePage/UserProfile';
import NewTask from './NewTask'
import { Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props)
    this.switchRedirect = this.switchRedirect.bind(this)
  }
  componentDidMount() {
    console.log(this.props);
    window.onbeforeunload = function() {
        this.switchRedirect();
    }.bind(this);
  }

  switchRedirect() {
    console.log('switch redirect');
    localStorage.setItem('redirect', "true")
    console.log(localStorage);
  }

  userListSidebarHeight() {
    return (`${((this.props.groupUsers.length * 40) + 120)}px`)
  }

  render() {
    if (localStorage.getItem("redirect") === "true") {
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
