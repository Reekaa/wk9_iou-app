import React from 'react'

const AddNewTask = (props) => {

  const handleNewTask = (evt) => {
    props.updateNewTaskButton('none')
    props.updateNewTaskForm('showForm')
  }
  const handleNewTaskSubmit = (evt) => {
    evt.preventDefault()
    let newTask = evt.target.inlineFormInputName.value;
    if (newTask.length >= 20) {
      props.updateErrorMessage('Task cannnot be longer than 20 characters')
    } else {
      props.object.createNewTask(newTask)
      props.updateNewTaskButton('showButton')
      props.updateNewTaskForm('none')
    }
  }

  const newTaskForm = () => {
    if (props.state.newTaskForm === 'showForm') {
      return (
        <>
          <form className="new-task-form" onSubmit={(evt) => {handleNewTaskSubmit(evt)}}>
            <input type="text" className="form-control" id="inlineFormInputName" placeholder="Babysitting"/>
            <button type="submit" id='submitbutt' className="btn btn-primary">Submit</button>
          </form>
          <div id='invalidInput' className="invalidInput">{props.state.errorMessage}</div>
        </>
      )
    }
  }
  const newTaskButton = () => {
    if (props.state.newTaskButton === 'showButton') {
      return(
        <>
        <button onClick = {(evt) => {handleNewTask(evt)}} id='submitbutt' type="button" className="btn btn-primary">Add New Task</button>
        </>
      )
    }
  }

  return (
    <>
      <div className='new-task-head'>Is the task you performed not listed? Add it here:</div>
      <div className='button-container'>
        {newTaskButton()}
      </div>
      {newTaskForm()}
    </>
  )
}

export default AddNewTask
