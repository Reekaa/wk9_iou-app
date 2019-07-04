import React, { Component } from 'react';
import taskDropdownFilter from '../../helpers/task_dropdown_filter.js';
import './dropdowns.css'
import NewRequest from './NewRequest';


class GroupOpenTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      taskButton: {_id: 0, task: "Select Task"},
      requestTaskButton: {_id: 0, task: "Select Task"},
      dropdownValue: '',
      confirmationMessage: ''
    }
    // this.toggleShowForm = this.toggleShowForm.bind(this);
    this.updateTaskButton = this.updateTaskButton.bind(this);
    this.pushOpenTasks = this.pushOpenTasks.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleConfirmationMessage = this.toggleConfirmationMessage.bind(this);
    this.taskOptionsList = taskDropdownFilter(this.props.groupUsers);
  };

  pushOpenTasks() {
    const pushTasks = [];
    this.props.groupUsers.forEach((user) => {
      if (user.groups[0].requestedTasks) {
        user.groups[0].requestedTasks.forEach(task => {
          const data = { ...task, username: user.name };
          pushTasks.push(data);
        })
      }
    });
    return pushTasks;
  }

  openTasksList() {
    const openTasks = this.pushOpenTasks();
    return openTasks.map((task, i) => {
      return <tr className='task-row' key={i}><td id='remove-border'>{`${task.username} has requested help with ${task.task.toLowerCase()}`}</td></tr>
    });
  }

  // toggleShowForm() {
  //   this.setState({ showForm : !this.state.showForm });
  // };

  updateTaskButton(taskButtonText) {
    this.setState({taskButton: taskButtonText})
  };

  handleSubmit(task) {
    const requestData = { task };
    this.props.addRequestToUser(this.props.currentUser, requestData);
    this.setState({ requestTaskButton: 'Select task', dropdownValue: '' });
    this.toggleConfirmationMessage();
  };

  toggleConfirmationMessage() {
    this.setState({ confirmationMessage: 'Your request has been added!' });
    setTimeout(() => {
      this.setState({ confirmationMessage: '' });
    }, 2500);
  };

  showOptions() {
    if (this.state.dropdownValue === '') {
      const taskOptionsList = taskDropdownFilter(this.props.groupUsers);
      const options = taskOptionsList.map((option, i) => {
        return (
          <li
            className='dropdown-cont'
            key={option}
          >
            <div
              id='dropdown-option'
              className='dropdown-cont'
              value={option}
              onClick={() => {this.handleSubmit(option)}}
            >
            {option}
            </div>
          </li>
        )
      });
      this.setState({ dropdownValue: options});
    } else {
      this.setState({ dropdownValue: '' });
    };
  };

  createRequestForm() {
    const requestForm =
        <div className='request-form'>
          <div id='request-form-label'>What do you need help with?</div>
            <button
              id="taskDropdown"
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              {this.state.requestTaskButton}
              <span id="caret" className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {this.tasks}
            </ul>
          </div>
    return this.state.showForm ? requestForm : null;
  };

  render() {
    return (
      <>
        <div className='recent-tasks-container'>
          <div className='border'>
            <table className='table'>
              <thead className="thead-light">
                <tr>
                  <th>Open tasks</th>
                </tr>
              </thead>
              <tbody>
                {this.openTasksList()}
              </tbody>
            </table>
          </div>
        </div>
        <div className='r'>
          <div className='b'>
            <NewRequest
              tasks = {this.props.tasks}
              taskOptionsList={this.taskOptionsList}
              handleSubmit={this.handleSubmit}
              taskButton={this.state.taskButton}
              updateTaskButton={this.updateTaskButton}
              createNewTask = {this.props.createNewTask}
              />
          </div>
        </div>
        <div className='confirmation-message'>
          {this.state.confirmationMessage}
        </div>
      </>
    );
  }
};

export default GroupOpenTasks;
