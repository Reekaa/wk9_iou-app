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

    }
    this.confirmation = this.confirmation.bind(this)
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

  render() {
    return(
      <>
      <div className='dropdown-container'>
        New Task:
        <div className="dropdown">
          <TasksDropdown object={this.props.object}/>
        </div>
        <div className="dropdown">
          <UsersDropdown object={this.props.object}/>
        </div>
        <div id='cost-input' className="form-group row">
          <CostNumber object={this.props.object}/>
        </div>
        <div className="dropdown">
          <CostMethod object={this.props.object}/>
        </div>
        <SubmitButt object={this.props.object}/>

      </div>
      {this.confirmation()}
      </>
    )
  }
}

export default NewTask
