
const taskDropdownFilter = (groupUsers) => {

  const tasks = [];
  groupUsers.forEach(user => {
    if (user.groups[0].completedTasks) {
      user.groups[0].completedTasks.forEach(task => {
        tasks.push(task.task);
      });
    };
  });

  const filteredTasks = tasks.filter((task, i) => {
    return i === tasks.indexOf(task);
  });

  return filteredTasks;

};

export default taskDropdownFilter;
