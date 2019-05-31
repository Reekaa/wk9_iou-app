import React, { useRef } from 'react'

const TasksDropdown = (props) => {

  const inputRef = useRef(null);

  const handleTasksDropdown = (evt) => {
    props.object.selectTask(evt)
    inputRef.current.textContent = evt
    props.object.changeConfirm(false)
  }

  const tasks = props.object.tasks.map((task) => {
    return (
      <li  key={task._id}>
      <div id='dropdown-option' onClick={() => {handleTasksDropdown(task.task)}}>{task.task}</div>
      </li>
    )
  })

  return(
    <>
    <button id="taskDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" ref={inputRef}>
      Select Task
      <span id="caret" className="caret"></span>
    </button>
    <ul className="dropdown-menu">
      {tasks}
    </ul>
    </>
  )
}
export default TasksDropdown
