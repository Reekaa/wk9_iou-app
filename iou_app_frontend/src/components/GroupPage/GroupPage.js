import React from 'react';
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import '../MainPage/mainpage.css'

const GroupPage = (props) => {

  const userListSidebarHeight = `${((props.groupUsers.length * 40) + 120)}px`;

  // const recentTasks = () => {
  //   return props.groupUsers.map
  // }

  return (
    <>
      <div className='main-container-grid'>
        <div className='main-container'>
          <div>
            {`Group name: ${props.currentUser.groups[0].groupName}`}
          </div>
          <div>
            <h3>Recent tasks</h3>
            <ul>
              <li>List item{/*logic to return recent tasks*/}</li>
              <li>List item</li>
            </ul>
            <button>Add a new completed task</button>
            <h3>Open tasks</h3>
            <ul>
              <li>List item{/*logic to return recent tasks*/}</li>
              <li>List item</li>
            </ul>
            <button>Add a new request</button>
          </div>
        </div>
        <div className='user-list-sidebar' style={{ height: `${userListSidebarHeight}` }}>
          <ViewGroupUsersContainer />
        </div>
      </div>
    </>
  );

};

export default GroupPage;
