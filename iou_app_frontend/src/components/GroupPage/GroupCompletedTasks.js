import React from 'react';
import { Link } from 'react-router-dom';
import taskListFormat from '../../helpers/task_list_format';

const GroupCompletedTasks = (props) => {

  const recentTasks = [];
  props.groupUsers.forEach((user) => {
    if (user.groups[0].completedTasks[0]) {
      user.groups[0].completedTasks.forEach(task => {
        const data = {...task, username: user.name}
        recentTasks.push(data);
      })
    }
  })

  const recentTasksList = taskListFormat(recentTasks);


  return (
    <div className='recent-tasks-container'>
      <div className='border'>
        <table className='table'>
          <thead className="thead-light">
            <tr>
              <th>Recent tasks</th>
            </tr>
          </thead>
          <tbody>
            {recentTasksList}
          </tbody>
        </table>
        <button className='addTaskButton'><Link to="/newtask">Add task</Link></button>
      </div>
    </div>
  )

}

export default GroupCompletedTasks;
