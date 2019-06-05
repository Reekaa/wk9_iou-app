import React, {Component} from "react";
import './userprofile.css'
import { Link } from 'react-router-dom';

class Main extends Component {
  componentDidMount() {
    localStorage.redirect = "false"
  }

  userlikes(skill) {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  }

  render() {
    if (this.props.currentUser !== null) {
      const populateGroups = this.props.currentUser.groups.map((group, i) => {
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
        </div>
      )

    } else {
      return null
    }

  }
};

export default Main;
