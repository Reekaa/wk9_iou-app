import React, { Component } from 'react'
import './NewRequest.css'
import TasksDropdown from '../MainPage/Dropdowns/TasksDropdown'
import AddNewRequest from '../MainPage/Dropdowns/AddNewRequest';

class NewRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskButton: {_id: 0, task: "Select Task"},
      showNewTaskForm: false,
    }
  this.updateTaskButton = this.updateTaskButton.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateTaskButton(taskButton) {
    this.setState({taskButton})
  };



  handleSubmit() {
    if(this.state.taskButton.task != "Select Task"){
      this.props.addRequestToUser(this.props.currentUser, this.state.taskButton);
      this.setState({taskButton: {_id: 0, task: "Select Task"}})
    }
  };



  render(){
  return(
    <>
      <div className='recent-tasks-container'>
        <div className='border'>
          <div id='dropdown' className="dropdown">
            <label className="request-menu">
              What do you want help with?
            </label>
            <TasksDropdown
              tasks = {this.props.tasks}
              taskButton = {this.state.taskButton}
              updateTaskButton={this.updateTaskButton}
            />
          </div>
          <div className='button-container'>
            <button
              onClick={() => {this.handleSubmit()}}
              type="button"
              className="request-menu addTaskButton"
            >
              Request Help
            </button>
          </div>
        <AddNewRequest
          createNewTask = {this.props.createNewTask}
        />
      </div>
    </div>
  </>
  )
  }

}

export default NewRequest
