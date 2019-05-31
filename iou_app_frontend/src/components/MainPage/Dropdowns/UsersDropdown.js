import React from 'react'

const UsersDropdown = (props) => {

  const handleUsersDropdown = (evt) => {
    props.object.selectUser(evt)
    props.updateUserButton(evt)
    props.object.changeConfirm(false)
  }

  const users = props.object.groupUsers.map((user) => {
    return (
      <li key={user._id}>
      <div id='dropdown-option' onClick={() => {handleUsersDropdown(user.name)}}>{user.name}</div>
      </li>);
    })

  return(
    <>
      <label>Who did you do it for?</label>
      <button id="userDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        {props.state.userButton}
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {users}
      </ul>
    </>
  )
}
export default UsersDropdown
