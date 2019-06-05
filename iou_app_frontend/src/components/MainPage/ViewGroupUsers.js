import React, { Component } from "react";
import './ViewGroupUsers.css'
import { Link } from 'react-router-dom';

class ViewGroupUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: '',
      groupDropdown: false,
      groupNameStyle: { zIndex: '0' }
    }
    this.groupUsersList = this.groupUsersList.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.groupMouseEnter = this.groupMouseEnter.bind(this);
    this.groupMouseLeave = this.groupMouseLeave.bind(this);
    this.renderGroupDropdown = this.renderGroupDropdown.bind(this);
  }

  mouseEnter(evt) {
    this.setState({ selectedUser: evt });
  }

  mouseLeave() {
    this.setState({ selectedUser: null });
  }

  renderInfo(user, index) {
    return (this.state.selectedUser === user.name) ?
      <p className='user-info'>{`${user.name} likes ${user.skill}`}</p>
      : null;
  }

  groupUsersList() {
    // counter calculates the height needed for list items to allow absolute positioning
    let counter = (this.props.groupUsers.length * 40);
    return this.props.groupUsers.map((user, i) => {
      const content =
        <div
          key={i}
          className='user-list-item'
          onMouseEnter={() => {this.mouseEnter(user.name)}}
          onMouseLeave={() => {this.mouseLeave()}}
          style={{ bottom: `${counter}px` }}
        >
          <p><img className="user-image" src={user.avatar} alt='avatar'/></p>
          <p className='user-list-item-name'>
            {user.name}
          </p>
          <p className='user-list-item-karma'>
            {user.groups[0].karma}
          </p>
            {this.renderInfo(user, i)}
        </div>
        counter -= 40; // decrement counter to move next item 40px downwards
      return content;
    });
  }

  groupMouseEnter() {
    this.setState({ groupNameStyle: { zIndex: '1' }});
    this.setState({ groupDropdown: true });
  }

  groupMouseLeave() {
    this.setState({ groupDropdown: false });
    this.setState({ groupNameStyle: { zIndex: '0' }});
    ;
  }

  renderGroupDropdown() {
    const groupDropdownText = (
      <div className='group-dropdown'>
        <br />
        <ul>
          <li><Link to="/groups">View group info</Link></li>
          <li>View your other groups</li>
        </ul>
      </div>
    )
    return this.state.groupDropdown ?
    groupDropdownText : null;
  }

  render() {
    return (
      <div className='user-list'>
        <div
          className='group-name'
          onMouseEnter={this.groupMouseEnter}
          onMouseLeave={this.groupMouseLeave}
          style={this.state.groupNameStyle}
        >
          <h3>Current group: {this.props.groupName}</h3>
          <div>{this.renderGroupDropdown()}</div>
        </div>
        {this.groupUsersList()}
      </div>
    )
  }
};

export default ViewGroupUsers;
