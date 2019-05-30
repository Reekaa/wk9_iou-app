import { connect } from "react-redux";

const LoginFormContainer = (props) => {

  const groupUsers = props.users.filter(user => {
    return user.groups[0].groupName === props.currentUser.groups[0].groupName;
  })

  return null;
  // EXTENSION: INSERT LOGIN FORM HERE
}

const mapDispatchToProps = dispatch => ({
  // add a function that sets state.currentUser 
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
