import React from 'react';
import { Link } from 'react-router-dom';

const GroupOpenTasks = (props) => {


  const openTasks = [];
  props.groupUsers.map((user, i) => {
    if (user.groups[0].requestedTasks) {
      return user.groups[0].requestedTasks.forEach(task => {
        const data = { ...task, username: user.name };
        openTasks.push(data);
      })
    }
  });

  const openTasksList = openTasks.map((task, i) => {
    return <div key={i}>{`${task.username} has requested help with ${task.task.toLowerCase()}`}</div>
  });

  return (
    <div className='recent-tasks-container'>
      <div className='border'>
        <table className='table'>
          <thead className="thead-light">
            <tr>
              <th>Open tasks</th>
            </tr>
          </thead>
          <tbody>
            {openTasksList}
          </tbody>
        </table>
        <button className='addTaskButton'><Link to="/newtask">New request</Link></button>
      </div>
    </div>
  );

}

export default GroupOpenTasks;
