import React from 'react'

const AddNewTask = (props) => {

console.log(props);
  const handleNewTask = (evt) => {
    props.updateNewTaskButton('none')
    props.revealNewTaskForm()
  }
  const handleNewTaskSubmit = (evt) => {
    evt.preventDefault()
    let newTask = evt.target.inlineFormInputName.value;
    if (newTask.length >= 20) {
      props.updateErrorMessage('Task cannnot be longer than 20 characters')
    } else {
      props.props.props.createNewTask(newTask)
      props.revealNewTaskForm()
    }
  }

  const newTaskForm = () => {
    if (props.state.showNewTaskForm === true) {
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
    if (props.state.showNewTaskForm === false) {
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
      <div> {newTaskForm()}</div>
      <div> {} </div>
    </>
  )
}

export default AddNewTask
