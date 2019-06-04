import { connect } from "react-redux";
import React from 'react';
import Login from '../components/MainPage/Login.js';
import { Redirect } from 'react-router-dom';
import UserProfileContainer from "./UserProfileContainer";



// EXTENSION: INSERT LOGIN FORM HERE
// TAKE CURRENT USER FOR ABOVE FUNCTION FROM USER INPUT
// filter the users to return an array of the ones in the relevant group


const LoginFormContainer = (props) => {


  if (props.currentUser.groups ) {
    const groupUsers = props.users.filter(user => {
      return user.groups[0].groupName === props.currentUser.groups[0].groupName;
    })
    props.setGroupUsers(groupUsers);
  }

  let redirect;

  for (let user of props.users) {
    if (user.isCurrent) {
      props.setCurrentUser(user)
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
    />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setGroupUsers(groupUsers) {
    dispatch({
      type: 'SET_GROUP_USERS',
      groupUsers
    })
  },
  getCurrentUser(name) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${name}`)
      .then((response) => response.json())
      .then((currentUser) => {
        console.log(currentUser);
        dispatch({
          type: 'SET_CURRENT_USER',
          currentUser
        })
      })
    })
  },
  setCurrentUser(currentUser) {
    dispatch({
      type: 'SET_CURRENT_USER',
      currentUser
    })
  }
})

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
