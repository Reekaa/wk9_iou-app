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
  }

  handleClick(evt) {
    this.setState({ selectedUser: evt });
    console.log('CLICK', evt);
  }

  renderInfo(user) {
    return (this.state.selectedUser === user.name) ?
    <p>Info about the user goes here</p>
    : null;
  }

  groupUsersList() {
    return this.props.groupUsers.map((user, i) => {
      return (
        <div
          key={i}
          className='user-list-item'
          onClick={(name) => {this.handleClick(user.name)}}
        >
          <p className='user-list-item-name'>
            {user.name}
          </p>
          <p className='user-list-item-karma'>
            {user.groups[0].karma}
          </p>
          <div className='user-info' style={{ opacity: `${0.5}` }}>
            {/* add handleClick for parent div to update this.state.selectedUser with user item
             // create renderInfo function:
                - render user info IF (this.state.selectedUser === user.name)
                - filter groupUsers for relevant user info and render
            */}
            {this.renderInfo(user)}
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className='user-list'>
        <div className='group-name'>
          {this.props.groupName}
        </div>
        {this.groupUsersList()}
      </div>
    )
  }
};

export default ViewGroupUsers;
