import React, { Component } from 'react';
import taskDropdownFilter from '../../helpers/task_dropdown_filter.js';

class GroupOpenTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      taskButton: 'Select Task',
      openTasks: [],
      requestTaskButton: 'Select task',
      dropdownValue: '',
      confirmationMessage: 'TEXT'
    }
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.updateTaskButton = this.updateTaskButton.bind(this);
    this.pushOpenTasks = this.pushOpenTasks.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleConfirmationMessage = this.toggleConfirmationMessage.bind(this);
  };

  componentDidMount() {
    const tasks = this.pushOpenTasks();
    this.setState({ openTasks: tasks });
  };

  pushOpenTasks() {
    const pushTasks = [];
    this.props.groupUsers.map((user, i) => {
      if (user.groups[0].requestedTasks) {
        return user.groups[0].requestedTasks.forEach(task => {
          const data = { ...task, username: user.name };
          pushTasks.push(data);
        })
      }
    });
    return pushTasks;
  }

  openTasksList() {
    console.log(this.state.openTasks);
    return this.state.openTasks.map((task, i) => {
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
    console.log(task);
    const requestData = {
      task
    }
    console.log(requestData);
    console.log(this.props.getNewData);
    this.props.addRequestToUser(this.props.currentUser, requestData);
    // // reset requestTaskButton value to 'select' and dropdownValue to ''
    // this.setState({ requestTaskButton: 'Select task', dropdownValue: '' });
    // // show confirmation message
    // this.setState({ confirmationMessage: 'Your request has been added!' });
    // // this.toggleConfirmationMessage();
  };

  toggleConfirmationMessage() {
    // setTimeout(() => {
    //   this.setState({ confirmationMessage: '' });
    // }, 2500);
    // // const checkConfirmation = () => {
    //   return <h3>Your request has been added!</h3>;
    // }
    // () => {
    //   return this.state.confirmationMessage === '' ?
    //     <h3>Your request has been added!</h3> : '';
    // }
  };

  showOptions() {
    this.setState({ confirmationMessage: '' });
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
        <div>
          <label htmlFor='request-input'>What do you need help with?</label>
          <div type='submit' id='request-dropdown' onClick={this.showOptions}>{this.state.requestTaskButton}
          <div className='request-dropdown-option'>{this.state.dropdownValue}</div></div>
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
