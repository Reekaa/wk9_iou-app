import React from 'react';

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
    return <div className='open-tasks-item' key={i}>{`${task.username} has requested help with ${task.task.toLowerCase()}`}</div>
  });

  return (
    <div className='open-tasks-container'>
      <div className='open-tasks-head'>Open tasks</div>
      {openTasksList}
      <div className='centerbutton'>
        <button className='addTaskRequest'>Add a new request</button>
      </div>
    </div>
  );

}

export default GroupOpenTasks;
