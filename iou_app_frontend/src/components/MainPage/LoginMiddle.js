import React from 'react';
import Login from './Login.js';
import UserProfileContainer from "../../containers/UserProfileContainer";
import { Redirect } from 'react-router-dom';



const LoginMiddle = (props) => {

  let redirect;

  for (let user of props.users) {
    if (user.isCurrent) {
      props.setCurrentUser(user)
      if (user.groups) {
        const groupUsers = props.users.filter(newuser => {
          return newuser.groups[0].groupName === user.groups[0].groupName;
        })
        props.setGroupUsers(groupUsers);
      }
      redirect = (
        <Redirect
          to='/profile'
          component={UserProfileContainer}
        />
      )
    }
  }

  if (redirect) {
    return redirect
  }

  return(
    <div>
      <Login
        getCurrentUser = {props.getCurrentUser}
        currentUser = {props.currentUser}
        setCurrentUser = {props.setCurrentUser}
        users = {props.users}
        setGroupUsers = {props.setGroupUsers}
        setCurrentUser = {props.setCurrentUser}

      />
    </div>
  )
}

export default LoginMiddle
