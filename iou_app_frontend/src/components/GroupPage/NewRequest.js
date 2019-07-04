import React, {Component} from 'react'
import TasksDropdown from '../MainPage/Dropdowns/TasksDropdown'
import UsersDropdown from '../MainPage/Dropdowns/UsersDropdown'
import CostNumber from '../MainPage/Dropdowns/CostNumber'
import SubmitButt from '../MainPage/Dropdowns/SubmitButt'
// import './dropdowns.css'
import './NewRequest.css'
import AddNewRequest from '../MainPage/Dropdowns/AddNewRequest';

class NewRequest extends Component {

  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      taskButton: {_id: 0, task: "Select Task"},
      userButton: {_id: 0, name: "Select User"},
      duration: '',
      newTaskForm: 'none',
      newTaskButton: 'showButton',
      errorMessage: ''
    }

    this.handleTaskDropdown = this.handleTaskDropdown.bind(this)
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateErrorMessage = this.updateErrorMessage.bind(this)
    this.updateNewTaskForm = this.updateNewTaskForm.bind(this)
    this.updateNewTaskButton = this.updateNewTaskButton.bind(this)

    this.tasks = this.props.taskOptionsList.map((element,index) => {

      return (
        <>
        <li
          className='dropdown-cont'
          key={index}
        >
          <div
            id='dropdown-option'
            onClick={this.handleTaskDropdown(element)}
          >
            {element}
          </div>
        </li>
        </>
      )
    })


  }


  confirmation() {
    if(this.props.confirm === true){
    return (
      <div className='confirm-text'>
        Request submitted!
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
  updateErrorMessage(errorText) {
    this.setState({errorMessage: errorText})
  }
  updateNewTaskForm(formText) {
    this.setState({newTaskForm: formText})
  }
  updateNewTaskButton(buttonText) {
    this.setState({newTaskButton: buttonText})
  }

  handleTaskDropdown(evt){
    console.log('event',evt);
    this.props.updateTaskButton(evt)
  }


render(){

  console.log('taskssss',this.tasks);
  return(
    <>
      <label
        className="request-menu"
      >
        What do you want help with?
      </label>
      <button
        id="taskDropdown"
        className="request-menu btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {this.props.taskButton}
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {this.tasks}
      </ul>
      <button
        onClick={() => {this.props.handleSubmit(this.props.taskButton)}}
        type="button"
        className="request-menu addTaskButton"
      >
        Request Help
      </button>
      <div className = "new-task-container" >
      <AddNewRequest
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
export default NewRequest
