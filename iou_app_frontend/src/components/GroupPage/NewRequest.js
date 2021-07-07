import React from 'react'
// import './dropdowns.css'
import './NewRequest.css'

const NewRequest = (props) => {

  const handleTasksDropdown = (evt) => {
    props.updateTaskButton(evt)
  }

  const tasks = props.taskOptionsList.map((element,index) => {
    return (
      <li
        className='dropdown-cont'
        key={index}
      >
        <div
          id='dropdown-option'
          onClick={() => {handleTasksDropdown(element)}}
        >
          {element}
        </div>
      </li>
    )
  })

  return(
    <>
      <label
        className="request-menu"
      >
        What do you want help with?
      </label>
      <button
        id="taskDropdown"
        className="request-menu btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {props.taskButton}
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {tasks}
      </ul>
      <button
        onClick={() => {props.handleSubmit(props.taskButton)}}
        type="button"
        className="request-menu addTaskButton"
      >
        Request Help
      </button>
    </>
  )

}
export default NewRequest
