import React, {Component} from "react";
import './userprofile.css'
import { Link } from 'react-router-dom';
import UserProfileCompletedTasks from './UserProfileCompletedTasks';

class Main extends Component {
  componentDidUpdate() {
    localStorage.redirect = "false"
  }

  userlikes(skill) {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  }


  render() {

    if (this.props.currentUser !== null) {

      const currentUserIndex = this.props.users.map(function(user) { return user._id; }).indexOf(this.props.currentUser._id);
      console.log('getting current user index!!', currentUserIndex);

      const userProfileInfo = this.props.users[currentUserIndex]
      console.log('hopefully got current user info!!', userProfileInfo);


      const populateGroups = userProfileInfo.groups.map((group, i) => {
        console.log(this.props.currentUser.groups);
        return(
          <tr key={i}>
          <td>{group.groupName}</td>
          <td>{group.karma}</td>
          <td>
          <button className='viewGroupButton' type="button">
          <Link to="/groups">View Group</Link>
          </button>
          </td>
          </tr>
        )
      })

      return(
        <div className='page-grid'>
          <div className='user-profile'>
            <img className="current-user-image" src={this.props.currentUser.avatar} alt='avatar'/>
              <div>
              <h1>{this.props.currentUser.name}</h1>
                <div className='likes'>Likes:
                  <ul className='userskills'>
                    <li>{this.userlikes(this.props.currentUser.skill)}</li>
                  </ul>
                  <div className='userprofile-div'>{this.props.currentUser.userprofile}</div>
                </div>
              </div>
          </div>
          <div>
            <div className='groups-container'>
              <div className='border'>
                <table id='groups-table' className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Group</th>
                      <th>Karma</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {populateGroups}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <UserProfileCompletedTasks
              groupUsers={this.props.groupUsers}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      )

    } else {
      return null
    }

  }
};

export default Main;
