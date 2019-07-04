import React, {Component} from 'react';
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import '../MainPage/mainpage.css'
import './GroupPage.css';
import GroupCompletedTasks from './GroupCompletedTasks';
import GroupOpenTasks from './GroupOpenTasks';
import { Redirect } from 'react-router-dom';



class GroupPage extends Component {
  constructor(props) {
    super(props)

    this.switchRedirect = this.switchRedirect.bind(this)
    this.userListSidebarHeight = this.userListSidebarHeight.bind(this)
  }
  componentDidMount() {
    window.onbeforeunload = function() {
        this.switchRedirect();
    }.bind(this);
  }

  switchRedirect() {
    localStorage.redirect = true
    console.log(localStorage);
  }

  userListSidebarHeight() {
    return (`${((this.props.groupUsers.length * 40) + 120)}px`);
  }

  render() {
    if (localStorage.redirect === "true") {
      return <Redirect to='/' />
    } else {
      return (
        <>
          <div className='main-container-grid'>
            <div className='main-container'>
              <div className ='group-name-header'>
                {`Group name: ${this.props.currentUser.groups[0].groupName}`}
              </div>
              <GroupCompletedTasks groupUsers={this.props.groupUsers} />
              <GroupOpenTasks
                tasks = {this.props.tasks}
                groupUsers={this.props.groupUsers}
                addRequestToUser={this.props.addRequestToUser}
                currentUser={this.props.currentUser}
                getNewData={this.props.getNewData}
               />
            </div>
            <div className='user-list-sidebar' style={{ height:   `${this.userListSidebarHeight()}` }}>
              <ViewGroupUsersContainer />
            </div>
          </div>
        </>
      );
    }
  }

};

export default GroupPage;
