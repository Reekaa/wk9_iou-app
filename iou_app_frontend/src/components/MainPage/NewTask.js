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
      userMessage: ''
    }
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateDuration = this.updateDuration.bind(this)
    this.updateUserMessage = this.updateUserMessage.bind(this)
    this.updateNewTaskForm = this.updateNewTaskForm.bind(this)
    this.updateNewTaskButton = this.updateNewTaskButton.bind(this)
  }

  confirmation() {
    switch (this.state.userMessage) {
      case 'incomplete form':
          return(
            <div id='invalidInput' className="invalidInput">
            Please complete all of the form
            </div>
          )
      case 'complete form':
          return(
            <div id='validInput' className="validInput">
            Thank you for helping your community
            </div>
          )
      default:
        return null
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
  updateUserMessage(userMessage) {
    this.setState({userMessage})
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
                updateUserMessage={this.updateUserMessage}
              />
            </div>
            {this.confirmation()}
          </div>
        </div>
        <div className='new-task-container'>
          <AddNewTask
            props={this.props}
            state={this.state}
            updateErrorMessage={this.updateErrorMessage}
            updateNewTaskForm={this.updateNewTaskForm}
            updateNewTaskButton={this.updateNewTaskButton}/>
        </div>
      </>
    )
  }
}

export default NewTask
