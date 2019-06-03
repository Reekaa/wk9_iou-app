import React, { Component } from 'react'
import TasksDropdown from './Dropdowns/TasksDropdown'
import UsersDropdown from './Dropdowns/UsersDropdown'
import CostNumber from './Dropdowns/CostNumber'
import CostMethod from './Dropdowns/CostMethod'
import SubmitButt from './Dropdowns/SubmitButt'
import AddNewTask from './Dropdowns/AddNewTask'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskButton: 'Select Task',
      userButton: 'Select User',
      costButton: 'Select Cost',
      costMethod: '',
      newTaskForm: 'none',
      newTaskButton: 'showButton',
      errorMessage: ''
    }
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateCostButton = this.updateCostButton.bind(this)
    this.updateCostMethod = this.updateCostMethod.bind(this)
    this.updateErrorMessage = this.updateErrorMessage.bind(this)
    this.updateNewTaskForm = this.updateNewTaskForm.bind(this)
    this.updateNewTaskButton = this.updateNewTaskButton.bind(this)
  }

  confirmation() {
    if(this.props.object.confirm === true){
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
  updateCostButton(costButtonText) {
    this.setState({costButton: costButtonText})
  }
  updateCostMethod(costMethodText) {
    this.setState({costMethod: costMethodText})
  }
  updateErrorMessage(errorText) {
    console.log(errorText);
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
      <div className='new-task'>New Task:</div>
      <div className='dropdown-container'>
        <div id='dropdown' className="dropdown">
          <TasksDropdown object={this.props.object} state={this.state} updateTaskButton={this.updateTaskButton}/>
        </div>
        <div id='dropdown' className="dropdown">
          <UsersDropdown object={this.props.object} state={this.state} updateUserButton={this.updateUserButton}/>
        </div>
        <div id='dropdown' className="dropdown">
          <CostMethod object={this.props.object} state={this.state} updateCostButton={this.updateCostButton}
          updateCostMethod={this.updateCostMethod}/>
        </div>
        <div id='dropdown' className="form-group row">
          <CostNumber object={this.props.object} state={this.state}/>
        </div>
        <div id='submit-container'>
        <SubmitButt
        object={this.props.object}
        state={this.state}
        updateTaskButton={this.updateTaskButton}
        updateUserButton={this.updateUserButton}
        updateCostButton={this.updateCostButton}
        />
        </div>
        {this.confirmation()}
      </div>
      <div className='new-task-container'>
        <AddNewTask object={this.props.object} state={this.state} updateErrorMessage={this.updateErrorMessage}
        updateNewTaskForm={this.updateNewTaskForm}
        updateNewTaskButton={this.updateNewTaskButton}/>
      </div>
      </>
    )
  }
}

export default NewTask
