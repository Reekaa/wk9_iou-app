import { connect } from "react-redux";
import React from 'react';
import Login from '../components/MainPage/Login.js';

// EXTENSION: INSERT LOGIN FORM HERE
// TAKE CURRENT USER FOR ABOVE FUNCTION FROM USER INPUT
// filter the users to return an array of the ones in the relevant group


const LoginFormContainer = (props) => {

  if (props.currentUser.groups ) {
    console.log(props.currentUser.groups);
    const groupUsers = props.users.filter(user => {
      return user.groups[0].groupName === props.currentUser.groups[0].groupName;
    })
    props.setGroupUsers(groupUsers)
  }

  return(
    <div>
      <Login
        getCurrentUser = {props.getCurrentUser}
      />
    </div>
  )

}

const mapDispatchToProps = dispatch => ({
  setGroupUsers(groupUsers) {
    console.log(groupUsers);
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
      .then(() => {console.log('LINE 49')})
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
