import { connect } from "react-redux";
import LoginMiddle from '../components/MainPage/LoginMiddle.js';

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginMiddle);
