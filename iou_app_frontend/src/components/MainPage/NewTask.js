import React, { Component } from 'react'
import TasksDropdown from './Dropdowns/TasksDropdown'
import UsersDropdown from './Dropdowns/UsersDropdown'
import CostNumber from './Dropdowns/CostNumber'
import SubmitButt from './Dropdowns/SubmitButt'
import AddNewTask from './Dropdowns/AddNewTask'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskButton: {_id: 0, task: "Select Task"},
      userButton: {_id: 0, name: "Select User"},
      duration: '',
      newTaskForm: 'none',
      newTaskButton: 'showButton',
      errorMessage: ''
    }
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateDuration = this.updateDuration.bind(this)
    this.updateErrorMessage = this.updateErrorMessage.bind(this)
    this.updateNewTaskForm = this.updateNewTaskForm.bind(this)
    this.updateNewTaskButton = this.updateNewTaskButton.bind(this)
  }

  confirmation() {
    if(this.props.confirm === true){
    return (
      <div className='confirm-text'>
        Task submitted!
      </div>
    )}else{
      return <div/>
    }
  }

  updateTaskButton(taskButton) {
    this.setState({taskButton})
  }
  updateUserButton(userButton) {
    this.setState({userButton})
  }
  updateDuration(duration) {
    this.setState({duration})
  }
  updateErrorMessage(errorText) {
    this.setState({errorMessage: errorText})
  }
  updateNewTaskForm(formText) {
    this.setState({newTaskForm: formText})
  }
  updateNewTaskButton(buttonText) {
    this.setState({newTaskButton: buttonText})
  }

  render() {
    return(
      <>
        <div className='columndisplay'>
          <div className='new-task'>New Task:</div>
          <div className='dropdown-container'>
            <div id='dropdown' className="dropdown">
              <TasksDropdown
                props={this.props}
                state={this.state}
                updateTaskButton={this.updateTaskButton}
              />
            </div>
            <div id='dropdown' className="dropdown">
              <UsersDropdown
                props={this.props}
                state={this.state}
                updateUserButton={this.updateUserButton}
              />
            </div>
            <div id='dropdown' className="dropdown">
              <CostNumber
                props={this.props}
                state={this.state}
                updateDuration={this.updateDuration}
              />
            </div>
            <div id='submit-container'>
              <SubmitButt
                props={this.props}
                state={this.state}
                updateTaskButton={this.updateTaskButton}
                updateUserButton={this.updateUserButton}
                updateDuration={this.updateDuration}
              />
            </div>
            {this.confirmation()}
          </div>
          <div className='new-task-container'>
            <AddNewTask
              props={this.props}
              state={this.state}
              updateErrorMessage={this.updateErrorMessage}
              updateNewTaskForm={this.updateNewTaskForm}
              updateNewTaskButton={this.updateNewTaskButton}/>
          </div>
        </div>

      </>
    )
  }
}

export default NewTask
