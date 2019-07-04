import React, { Component } from 'react'
// import './dropdowns.css'
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
    console.log('click');
    if(this.state.taskButton.task != "Select Task"){
      this.props.addRequestToUser(this.props.currentUser, this.state.taskButton);
      this.setState({taskButton: {_id: 0, task: "Select Task"}})
    }
  };



  render(){
  return(
    <>
      <label
        className="request-menu"
      >
        What do you want help with?
      </label>

      <button
        onClick={() => {this.handleSubmit()}}
        type="button"
        className="request-menu addTaskButton"
      >
        Request Help
      </button>
      <div className='new-task-container'>
      <AddNewRequest
      createNewTask = {this.props.createNewTask}
      />
      </div>

    </>
  )
  }

}

export default NewRequest


// <TasksDropdown
//   tasks = {this.props.tasks}
//   taskButton = {this.state.taskButton}
//   updateTaskButton={this.updateTaskButton}
// />
