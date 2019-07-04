import React, {Component} from "react";
import './mainpage.css'
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
// import UserProfile from '../UserProfilePage/UserProfile';
import NewTask from './NewTask'
import NewRequest from '../GroupPage/NewRequest'
import { Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props)
    this.switchRedirect = this.switchRedirect.bind(this)
  }
  componentDidMount() {
    window.onBeforeUnload = function() {
        this.switchRedirect();
    }.bind(this);
  }

  switchRedirect() {
    localStorage.setItem('redirect', "true")
  }

  userListSidebarHeight() {
    return (`${((this.props.groupUsers.length * 40) + 120)}px`)
  }

  render() {
    if (localStorage.getItem("redirect") === "true") {
      return <Redirect to='/' />
    }else{
      return(
        <div>
        <div className='main-container-grid'>
          <div className='main-container'>
            <NewTask
              tasks = {this.props.tasks}
              groupUsers = {this.props.groupUsers}
              currentUser = {this.props.currentUser}
              addTaskToUser = {this.props.addTaskToUser}
              addKarmaToUser = {this.props.addKarmaToUser}
              createNewTask = {this.props.createNewTask}
            />
          </div>
          <div className='user-list-sidebar' style={{ height: `${this.userListSidebarHeight()}` }}>
            <ViewGroupUsersContainer />
          </div>
        </div>
        <div>
        <NewRequest props={this.props}/>
        </div>
        </div>
    )
  }
};
}
export default Main;
