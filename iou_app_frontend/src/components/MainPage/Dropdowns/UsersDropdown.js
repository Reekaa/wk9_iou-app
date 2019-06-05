import React from 'react'
import './dropdowns.css'

const UsersDropdown = (props) => {

  const handleUsersDropdown = (evt) => {
    props.selectUser(evt)
    props.updateUserButton(evt)
    props.changeConfirm(false)
  }

  const users = props.groupUsers.map((user) => {
    if (user.name !== props.currentUser.name) {
      return (
        <li key={user._id}>
          <div id='dropdown-option' onClick={() => {handleUsersDropdown(user.name)}}>{user.name}</div>
        </li>);
      } else {
      return null
    }
  })

  return(
    <>
      <label>Who did you do it for?</label>
        <button id="userDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
          {props.userButton}
          <span id="caret" className="caret"></span>
        </button>
      <ul className="dropdown-menu">
        {users}
      </ul>
    </>
  )
}
export default UsersDropdown
