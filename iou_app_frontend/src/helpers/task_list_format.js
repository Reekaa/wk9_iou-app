import React from 'react';
import './tasklist.css'

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
    const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
    const day = days[date.getDay()];
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
    ];
    let suffix;

    if (taskDate[9] === '1' && taskDate[8] !== '1') {
      suffix = 'st'
    } else if (taskDate[9] === 2 && taskDate[8] !== 1) {
      suffix = 'nd'
    } else if (taskDate[9] === 3 && taskDate[8] !== 1) {
      suffix = 'rd'
    } else {
      suffix = 'th'
    }
    const month = months[date.getMonth()];
    const monthDate = `${taskDate[8]}${taskDate[9]}${suffix}`;
    const formattedDate = `${day} ${monthDate} ${month}`;
    return formattedDate;
  };



  return recentTasks.map((task, i) => {

    return <tr className='task-row' key={i}>
    <td id='remove-border'>
      {`${task.username} did some ${task.task.toLowerCase()} for ${task.whoFor}`}
    </td>
    <td id='date'>
      {formatDate(task.date)}
    </td>
    </tr>

  });

}

export default taskListFormat;
