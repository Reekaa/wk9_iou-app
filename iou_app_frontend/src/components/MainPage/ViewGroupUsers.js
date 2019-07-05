import React, { Component } from "react";
import './ViewGroupUsers.css'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class ViewGroupUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: '',
      groupDropdown: false,
      groupNameStyle: { zIndex: '0' },
      redirect: false
    }
    this.groupUsersList = this.groupUsersList.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.renderGroupDropdown = this.renderGroupDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
  }

  mouseEnter(evt) {
    this.setState({ selectedUser: evt });
  }

  mouseLeave() {
    this.setState({ selectedUser: null });
  }

  handleClick(name) {
    if (name === this.props.currentUser.name) {
      {this.setRedirect()}
    }
  }

  renderInfo(user, index) {
    return (this.state.selectedUser === user.name) ?
      <p className='user-info'>{`${user.name} likes ${user.skill}`}</p>
      : null;
  }

  groupUsersList() {
    let counter = (this.props.groupUsers.length * 40);
    return this.props.groupUsers.map((user, i) => {
      const content =
        <div
          key={i}
          className='user-list-item'
          onMouseEnter={() => {this.mouseEnter(user.name)}}
          onMouseLeave={() => {this.mouseLeave()}}
          onClick={() => {this.handleClick(user.name)}}
          style={{ bottom: `${counter}px` }}
        >
          {this.renderRedirect()}
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

  renderGroupDropdown() {
    const groupDropdownText = (
      <div className='group-dropdown'>
          <button className='view-group-info'><Link to="/groups"><span>Group Info</span></Link></button>
          <button className='view-other-groups'><span>Your Groups</span></button>
      </div>
    )
    return groupDropdownText;
  }

  render() {
    return (
      <div className='user-list'>
        <div className ='user-sidebar-list'>
          <div>{this.renderGroupDropdown()}</div>
          <div
            className='group-name'
            onMouseEnter={this.groupMouseEnter}
            onMouseLeave={this.groupMouseLeave}
            style={this.state.groupNameStyle}
          >
          <h3>Users in {this.props.groupName}</h3>
          </div>
          <div className='users'>
          {this.groupUsersList()}
          </div>
        </div>
       </div>
    )
  }
};

export default ViewGroupUsers;
