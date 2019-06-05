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
    return <div key={i}>{`${task.username} has requested help with ${task.task.toLowerCase()}`}</div>
  });

  return (
    <div>
      <h3>Open tasks</h3>
      {openTasksList}
      <button>Add a new request</button>
    </div>
  );

}

export default GroupOpenTasks;
