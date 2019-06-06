import React from 'react';
import taskListFormat from '../../helpers/task_list_format';

const UserProfileCompletedTasks = (props) => {

  const allTasks = [];
  props.groupUsers.forEach((user) => {
    if (user.groups[0].completedTasks[0]) {
      user.groups[0].completedTasks.forEach(task => {
        const data = {...task, username: user.name}
        allTasks.push(data);
      });
    };
  });

  const usersTasks = allTasks.filter((task) => {
    return task.whoFor === props.currentUser.name;
  });

  const usersTasksList = () => {
    return taskListFormat(usersTasks);
  };

  const usersTasksOutput = () => {
    return (
      <div className='recent-tasks-container'>
        <div className='border'>
          <table className='table'>
            <thead className="thead-light">
              <tr>
                <th>Friends have recently done these tasks for you</th>
              </tr>
            </thead>
            <tbody>
              {usersTasksList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (usersTasks.length > 0) ?
  usersTasksOutput(): <div></div>;

}

export default UserProfileCompletedTasks;
