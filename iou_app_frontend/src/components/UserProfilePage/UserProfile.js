import React from "react";
import './userprofile.css'

const Main = props => {

  const userlikes = (skill) => {
    return skill.charAt(0).toUpperCase() + skill.slice(1);
  }

  if (props.currentUser !== null) {
    console.log(props.currentUser);
    const populateGroups = props.currentUser.groups.map((group) => {
      return(
        <tr>
        <td>{group.groupName}</td>
        <td>{group.karma}</td>
        <td><button onClick = {() => {handleView(group.groupName)}} className='viewGroupButton' type="button">View Group</button></td>
        </tr>
      )
    })

    const handleView = () => {
      console.log('hello');
    }

    return(
      <div className='page-grid'>
      <div className='username'>{props.currentUser.name}</div>
      <div>
        <div className='likes'>Likes:
          <ul className='userskills'>
            <li>{userlikes(props.currentUser.skill)}</li>
          </ul>
        </div>
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
};

export default Main;
