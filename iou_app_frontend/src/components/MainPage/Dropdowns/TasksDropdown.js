import React from 'react'

const TasksDropdown = (props) => {

  const handleTasksDropdown = (evt) => {
    props.object.selectTask(evt)
    props.updateTaskButton(evt)
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
    <button id="taskDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
      {props.state.taskButton}
      <span id="caret" className="caret"></span>
    </button>
    <ul className="dropdown-menu">
      {tasks}
    </ul>
    </>
  )
}
export default TasksDropdown
