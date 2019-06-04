import React from 'react';
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import '../MainPage/mainpage.css'
import { Link } from 'react-router-dom';


const GroupPage = (props) => {

  const userListSidebarHeight = `${((props.groupUsers.length * 40) + 120)}px`;

  const recentTasks = [];
  props.groupUsers.forEach((user) => {
    if (user.groups[0].completedTasks[0]) {
      user.groups[0].completedTasks.forEach(task => {
        recentTasks.push(task);
      })
    }
  })

<<<<<<< HEAD
  const recentTasksList = recentTasks.map((task, i) => {
    return <li key={i}>{task.task}</li>
  })

  // TODO: sort by date
  // recentTasks.sort((a, b) => {
  //   return a>b ? -1 : a<b ? 1 : 0; // sort dates in order starting with most recent??
  // });

=======
  recentTasks.sort((a, b) => {
    return a>b ? -1 : a<b ? 1 : 0; // sort dates in order starting with most recent??
  });

>>>>>>> 4510e87de6cc726e7443c2026cac29d3b452bc25
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
              {recentTasksList}
            </ul>
            <button><Link to="/newtask">Add a new completed task</Link></button>
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
