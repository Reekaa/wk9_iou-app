import { connect } from "react-redux";
import React from 'react';
import Login from '../components/MainPage/Login.js';

// filter the users to return an array of the ones in the relevant group

const LoginFormContainer = (props) => {

  const groupUsers = props.users.filter(user => {
    return user.groups[0].groupName === props.currentUser.groups[0].groupName;
  })
  props.setGroupUsers(groupUsers);

  return(
    <div>
      <Login setGroupUsers = {props.setGroupUsers}/>
    </div>
  )

  // EXTENSION: INSERT LOGIN FORM HERE
  // TAKE CURRENT USER FOR ABOVE FUNCTION FROM USER INPUT
}

const mapDispatchToProps = dispatch => ({
  setGroupUsers(groupUsers) {
    dispatch({
      type: 'SET_GROUP_USERS',
      groupUsers
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
