import React, { Component } from "react";
import './mainpage.css'

class ViewGroupUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ''
    }
    this.groupUsersList = this.groupUsersList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  mouseEnter(evt) {
    this.setState({ selectedUser: evt });
  }

  mouseLeave() {
    this.setState({ selectedUser: null });
  }

  handleClick(evt) {
    console.log('CLICK', evt);
  }

  renderInfo(user, index) {
    return (this.state.selectedUser === user.name) ?
    <p>Info about user {`${index}`} goes here</p>
    : null;
  }

  groupUsersList() {
    // counter calculates the height needed for list items to allow absolute positioning
    let counter = (this.props.groupUsers.length * 40);
    return this.props.groupUsers.map((user, i) => {
      console.log(counter);
      const content =
        <div
        key={i}
        className='user-list-item'
        onClick={(name) => {this.handleClick(user.name)}}
        onMouseEnter={(name) => {this.mouseEnter(user.name)}}
        onMouseLeave={(name) => {this.mouseLeave()}}
        style={{ bottom: `${counter}px` }}
        >
        <p className='user-list-item-name'>
        {user.name}
        </p>
        <p className='user-list-item-karma'>
        {user.groups[0].karma}
        </p>
        <p className='user-info'>
        {/* add handleClick for parent div to update this.state.selectedUser with user item
          // create renderInfo function:
          - render user info IF (this.state.selectedUser === user.name)
          - filter groupUsers for relevant user info and render
          */}
          {this.renderInfo(user, i)}
          </p>
          </div>
        counter -= 40; // decrement counter to move next item 40px downwards
      return content;
    });
  }

  render() {
    return (
      <div className='user-list'>
        <div className='group-name'>
          Current group: {this.props.groupName}
        </div>
        {this.groupUsersList()}
      </div>
    )
  }
};

export default ViewGroupUsers;
