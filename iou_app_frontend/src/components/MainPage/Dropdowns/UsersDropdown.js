import React from 'react'
import './dropdowns.css'

const UsersDropdown = (props) => {

  const handleUsersDropdown = (evt) => {
    // props.object.selectUser(evt)
    props.updateUserButton(evt)
    // props.object.changeConfirm(false)
  }

  const users = props.groupUsers.map((user) => {
    if (user.name !== props.currentUser.name) {
      return (
        <li
          className='dropdown-cont'
          key={user._id}
        >
          <div
            id='dropdown-option'
            onClick={() => {handleUsersDropdown(user)}}
          >
            {user.name}
          </div>
        </li>);
      } else {
      return null
    }
  })

  return(
    <>
      <label>Who did you do it for?</label>
        <button
          id="userDropdown"
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          {props.userButton.name}
          <span id="caret" className="caret"></span>
        </button>
      <ul className="dropdown-menu">
        {users}
      </ul>
    </>
  )
}
export default UsersDropdown
