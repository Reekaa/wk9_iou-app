import React from 'react';
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import '../MainPage/mainpage.css'
import './GroupPage.css';
import GroupCompletedTasks from './GroupCompletedTasks';
import GroupOpenTasks from './GroupOpenTasks';


const GroupPage = (props) => {

  const userListSidebarHeight = `${((props.groupUsers.length * 40) + 120)}px`;

  return (
    <>
      <div className='main-container-grid'>
        <div className='main-container'>
          <div className ='group-name-header'>
            {`Group name: ${props.currentUser.groups[0].groupName}`}
          </div>
          <GroupCompletedTasks groupUsers={props.groupUsers} />
          <GroupOpenTasks groupUsers={props.groupUsers} />
        </div>
        <div className='user-list-sidebar' style={{ height: `${userListSidebarHeight}` }}>
          <ViewGroupUsersContainer />
        </div>
      </div>
    </>
  );

};

export default GroupPage;
