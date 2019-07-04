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
      showNewTaskForm: false,
      userMessage: ''
    }
    this.submitConfirmation = this.submitConfirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateDuration = this.updateDuration.bind(this)
    this.updateUserMessage = this.updateUserMessage.bind(this)
  }

  submitConfirmation() {
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

  // updateNewTaskButton(newTaskButton) {
  //   this.setState({newTaskButton})
  // }

  render() {
    return(
      <>
        <div className='columndisplay'>
          <div className='new-task'>New Task:</div>
          <div className='dropdown-container'>
            <div id='dropdown' className="dropdown">
            <label>What task did you do?</label>
              <TasksDropdown
                tasks = {this.props.tasks}
                taskButton = {this.state.taskButton}
                updateTaskButton={this.updateTaskButton}
                message={"i helped someone today"}
              />
            </div>
            <div id='dropdown' className="dropdown">
            <label>Who did you do it for?</label>
              <UsersDropdown
                groupUsers = {this.props.groupUsers}
                currentUser = {this.props.currentUser}
                userButton = {this.state.userButton}
                updateUserButton={this.updateUserButton}
              />
            </div>
            <div id='dropdown' className="dropdown">
            <label>How long did it take you?</label>
              <CostNumber
                duration = {this.state.duration}
                updateDuration={this.updateDuration}
              />
            </div>
            <div id='submit-container'>
              <SubmitButt
                taskButton = {this.state.taskButton}
                userButton = {this.state.userButton}
                duration = {this.state.duration}
                currentUser = {this.props.currentUser}
                updateTaskButton={this.updateTaskButton}
                updateUserButton={this.updateUserButton}
                updateDuration={this.updateDuration}
                updateUserMessage={this.updateUserMessage}
                addTaskToUser = {this.props.addTaskToUser}
                addKarmaToUser = {this.props.addKarmaToUser}
              />
            </div>
            {this.submitConfirmation()}
          </div>
          </div>
        <div className='new-task-container'>
        <div className='new-task-head'>Is the task you performed not listed? Add it here:</div>
          <AddNewTask
            createNewTask = {this.props.createNewTask}
          />
        </div>
      </>
    )
  }
}

export default NewTask
