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
      taskButton: 'Select Task',
      userButton: 'Select User',
      newTaskForm: 'none',
      newTaskButton: 'showButton',
      errorMessage: ''
    }
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
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
      return <div></div>
    }
  }

  updateTaskButton(taskButtonText) {
    this.setState({taskButton: taskButtonText})
  }
  updateUserButton(userButtonText) {
    this.setState({userButton: userButtonText})
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
              <TasksDropdown {...this.props} {...this.state} updateTaskButton={this.updateTaskButton}/>
            </div>
            <div id='dropdown' className="dropdown">
              <UsersDropdown {...this.props} {...this.state} updateUserButton={this.updateUserButton}/>
            </div>
            <div id='dropdown' className="dropdown">
              <CostNumber {...this.props} {...this.state}/>
            </div>
            <div id='submit-container'>
              <SubmitButt
                {...this.props}
                {...this.state}
                updateTaskButton={this.updateTaskButton}
                updateUserButton={this.updateUserButton}
                updateCostButton={this.updateCostButton}
              />
            </div>
            {this.confirmation()}
          </div>
        </div>
        <div className='new-task-container'>
          <AddNewTask
            {...this.props}
            {...this.state}
            updateErrorMessage={this.updateErrorMessage}
            updateNewTaskForm={this.updateNewTaskForm}
            updateNewTaskButton={this.updateNewTaskButton}/>
        </div>
      </>
    )
  }
}

export default NewTask
