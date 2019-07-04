import React from 'react'
import './dropdowns.css'

const TasksDropdown = (props) => {
  const handleTasksDropdown = (evt) => {
    props.updateTaskButton(evt) //updates text on task button
  }

  const tasks = props.tasks.map((task) => {
    return (
      <li
        className='dropdown-cont'
        key={task._id}
      >
        <div
          id='dropdown-option'
          onClick={() => {handleTasksDropdown(task)}}
        >
          {task.task}
        </div>
      </li>
    )
  })

  return(
    <>
      <button
        id="taskDropdown"
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {props.taskButton.task}
        <span id="caret" className="caret"></span>
        </button>
      <ul className="dropdown-menu">
        {tasks}
      </ul>
    </>
  )
}
export default TasksDropdown
