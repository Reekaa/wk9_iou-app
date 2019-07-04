import React, { Component } from 'react'

class AddNewRequest extends Component {
  constructor(props) {
    super(props)
    // console.log('request props',this.props);
    this.state = {
      revealNewTaskForm: false,
      newTask:'',
      newTaskMessage:''
    }
    this.revealNewTaskForm=this.revealNewTaskForm.bind(this);
    this.handleFormChange=this.handleFormChange.bind(this);
    this.handleNewTaskSubmit=this.handleNewTaskSubmit.bind(this);
  }

  revealNewTaskForm() {
    this.setState({revealNewTaskForm:true})
  }

  handleFormChange(event) {
    this.setState({ newTask: event.target.value });
  }

  handleNewTaskSubmit(event){
    event.preventDefault()
    if (this.state.newTask.length >= 20) {
      this.setState({newTaskMessage:'string too long'})
      setTimeout(() => {
        this.setState({newTaskMessage:''});
      }, 2500);
    } else if (this.state.newTask.length){
      this.props.createNewTask(this.state.newTask)
      this.setState({revealNewTaskForm: false, newTaskMessage:'complete form', newTask:''})
      setTimeout(() => {
        this.setState({newTaskMessage:''});
      }, 2500);
    }
  }

  newTaskButton(){
    if (this.state.revealNewTaskForm === false) {
      return(
        <>
          <button
            onClick = {this.revealNewTaskForm}
            id='submitbutton'
            type="button"
            className="request-menu addTaskButton"
          >
            Add New Task
          </button>
        </>
      )
    }
  }

  newTaskForm(){
    if (this.state.revealNewTaskForm === true) {
      return (
        <>
          <form
            className="new-task-form"
            onSubmit={this.handleNewTaskSubmit}
          >
            <input
              type="text"
              className="form-control"
              id="inlineFormInputName"
              placeholder="Babysitting"
              value = {this.state.newTask}
              onChange={this.handleFormChange}
            />
            <button
              type="submit"
              id='submitbutt'
              className="request-menu addTaskButton"
            >
              Submit
            </button>
          </form>
        </>
      )
    }
  }

  newTaskConfirmation (){
    switch (this.state.newTaskMessage) {
      case 'string too long':
          return(
            <div id='invalidInput' className="invalidInput">
              Task cannot be longer than 20 characters
            </div>
          )
      case 'complete form':
          return(
            <div id='validInput' className="validInput">
              New task added
            </div>
          )
      default:
        return null
    }
  }

  render(){
    return (
      <>
      <div className='new-task-head request-menu'>Is the task you performed not listed? Add it here:</div>
        <div className='button-container'>
          {this.newTaskButton()}
          </div>
        <div>
          {this.newTaskForm()}
        </div>
        <div>
          {this.newTaskConfirmation()}
        </div>
      </>
    )
  }
}


export default AddNewRequest
