import React, { Component } from 'react';
import taskDropdownFilter from '../../helpers/task_dropdown_filter.js';

class GroupOpenTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      taskButton: 'Select Task',
      requestTaskButton: 'Select task',
      dropdownValue: '',
      confirmationMessage: ''
    }
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.updateTaskButton = this.updateTaskButton.bind(this);
    this.pushOpenTasks = this.pushOpenTasks.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleConfirmationMessage = this.toggleConfirmationMessage.bind(this);
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

  toggleShowForm() {
    this.setState({ showForm : !this.state.showForm });
  };

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
        return <button onClick={() => {this.handleSubmit(option)}} className='block-button' key={i} value={option}>{option}</button>;
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
          <div className='button-container'>
            <div
              className='addTaskButton'
              id='request-dropdown'
              onClick={this.showOptions}
              >
              {this.state.requestTaskButton}
              <div className='request-dropdown-option'>{this.state.dropdownValue}</div>
            </div>
          </div>
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
            <div className='button-container'>
              <button className='addTaskButton' onClick={this.toggleShowForm}>New request</button>
            </div>
          </div>
        </div>
        <div>
          {this.createRequestForm()}
        </div>
        <div className='confirmation-message'>
          {this.state.confirmationMessage}
        </div>
      </>
    );
  }
};

export default GroupOpenTasks;
