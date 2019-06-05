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
    return (`${((this.props.groupUsers.length * 40) + 120)}px`);
  }

  render() {
    if (localStorage.redirect === "true") {
      console.log(localStorage);
      return <Redirect to='/' />
    }
    return (
      <>
        <div className='main-container-grid'>
          <div className='main-container'>
            <div className ='group-name-header'>
              {`Group name: ${this.props.currentUser.groups[0].groupName}`}
            </div>
            <GroupCompletedTasks groupUsers={this.props.groupUsers} />
            <GroupOpenTasks groupUsers={this.props.groupUsers} />
          </div>
          <div className='user-list-sidebar' style={{ height: `${this.userListSidebarHeight()}` }}>
            <ViewGroupUsersContainer />
          </div>
        </div>
      </>
    );
  }

};

export default GroupPage;
