import React, { useRef } from 'react'

const UsersDropdown = (props) => {

  const inputRef = useRef(null);

  const handleUsersDropdown = (evt) => {
    props.object.selectUser(evt)
    inputRef.current.textContent = evt
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
      <button id="userDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" ref={inputRef}>
        Select User
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {users}
      </ul>
    </>
  )
}
export default UsersDropdown
