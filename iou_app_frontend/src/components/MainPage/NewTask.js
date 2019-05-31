import React, { Component } from 'react'
import TasksDropdown from './Dropdowns/TasksDropdown'
import UsersDropdown from './Dropdowns/UsersDropdown'
import CostNumber from './Dropdowns/CostNumber'
import CostMethod from './Dropdowns/CostMethod'
import SubmitButt from './Dropdowns/SubmitButt'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskButton: 'Select Task',
      userButton: 'Select User',
      costMethod: 'Select Cost'

    }
    this.confirmation = this.confirmation.bind(this)
    this.updateTaskButton = this.updateTaskButton.bind(this)
    this.updateUserButton = this.updateUserButton.bind(this)
    this.updateCostButton = this.updateCostButton.bind(this)
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
    this.setState({costMethod: costButtonText})
  }

  render() {
    return(
      <>
      <div className='dropdown-container'>
        New Task:
        <div className="dropdown">
          <TasksDropdown object={this.props.object} state={this.state} updateTaskButton={this.updateTaskButton}/>
        </div>
        <div className="dropdown">
          <UsersDropdown object={this.props.object} state={this.state} updateUserButton={this.updateUserButton}/>
        </div>
        <div id='cost-input' className="form-group row">
          <CostNumber object={this.props.object}/>
        </div>
        <div className="dropdown">
          <CostMethod object={this.props.object} state={this.state} updateCostButton={this.updateCostButton}/>
        </div>
        <SubmitButt object={this.props.object} state={this.state}/>

      </div>
      {this.confirmation()}
      </>
    )
  }
}

export default NewTask
