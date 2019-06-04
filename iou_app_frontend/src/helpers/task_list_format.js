import React from 'react';

const taskListFormat = (tasks) => {

  // sortByDate function adapted from https://gist.github.com/onpubcom/1772996
  const sortByDate = (tasksWithDate) => {
    return tasksWithDate.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  };

  const sortedTasks = sortByDate(tasks);
  const recentTasks = [];
  for (let i = 0; i<5; i++) {
    recentTasks.push(sortedTasks[i])
  };

  const formatDate = (taskDate) => {
    const date = new Date(taskDate);
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
    const day = days[date.getDay()];
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];
    const month = months[date.getMonth()];
    const monthDate = `${taskDate[8]}${taskDate[9]}`;
    const formattedDate = `${day} ${monthDate} ${month}`;
    return formattedDate;
  };



  return recentTasks.map((task, i) => {
    return <tr key={i}>
      {`${task.username} did some ${task.task.toLowerCase()} for ${task.whoFor} on ${formatDate(task.date)}`}
    </tr>
  });

}

export default taskListFormat;
