import React from 'react';
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import '../MainPage/mainpage.css'
import { Link } from 'react-router-dom';
import taskListFormat from '../../helpers/task_list_format';
import './GroupPage.css';
import GroupCompletedTasks from './GroupCompletedTasks';
import GroupOpenTasks from './GroupOpenTasks';


const GroupPage = (props) => {

  console.log(props);

  const userListSidebarHeight = `${((props.groupUsers.length * 40) + 120)}px`;

  return (
    <>
      <div className='main-container-grid'>
        <div className='main-container'>
          <div>
            {`Group name: ${props.currentUser.groups[0].groupName}`}
          </div>
          <GroupCompletedTasks groupUsers={props.groupUsers} />
          <GroupOpenTasks
            groupUsers={props.groupUsers}
            addRequestToUser={props.addRequestToUser}
            currentUser={props.currentUser}
          />
        </div>
        <div className='user-list-sidebar' style={{ height: `${userListSidebarHeight}` }}>
          <ViewGroupUsersContainer />
        </div>
      </div>
    </>
  );

};

export default GroupPage;
