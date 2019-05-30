import React from "react";
import './mainpage.css'

const Main = props => {

  const tasks = props.tasks.map((task) => {
    return (
      <li key={task._id}>
        <a href="#">{task.task}</a>
      </li>)
  })

  const users = props.users.map((user) => {
    return (
      <li key={user._id}>
        <a href="#">{user.name}</a>
      </li>);
  })


  return(
  <div className='dropdown-container'>
    New Task:
    <div className="dropdown">
      <button id="dropdowns" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        Select Task
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {tasks}
      </ul>
    </div>
    <div className="dropdown">
      <button id="dropdowns" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        Select User
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {users}
      </ul>
    </div>
    <button id='submitbutt' type="button" className="btn btn-primary">Submit</button>
  </div>
)
};

export default Main;
