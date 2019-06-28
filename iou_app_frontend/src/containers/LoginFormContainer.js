import { connect } from "react-redux";
import LogInPage from '../components/MainPage/LogInPage.js';

const mapDispatchToProps = dispatch => ({
  setGroupUsers(groupUsers) {
    dispatch({
      type: 'SET_GROUP_USERS',
      groupUsers
    })
  },
  getCurrentUser(name, users) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${name}`)
      .then((response) => response.json())
      .then((currentUser) => {
        dispatch({
          type: 'SET_CURRENT_USER',
          currentUser
        })
        return currentUser
      })
      .then((currentUser) => {
        if (currentUser.groups) {
          const groupUsers = users.filter(user => {
            return user.groups[0].groupName === currentUser.groups[0].groupName;
          })
          dispatch({
            type: 'SET_GROUP_USERS',
            groupUsers
          })
        }
      })
    })
  },

  createNewUser(newUser) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
      .then((currentUser) => {
        dispatch({
          type: 'ADD_USER',
          currentUser
        })
        console.log('running');
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
