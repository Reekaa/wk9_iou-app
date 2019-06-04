import { connect } from "react-redux";
import UserProfile from "../components/UserProfilePage/UserProfile";

console.log('UserProfile');

const checkCurrentUser = (state) => {
  console.log();
  if (state.currentUser.name === null) {
    return null
  } else {
    return (state.currentUser);
  }
}

const mapStateToProps = state => {

  return {
    users: state.users,
    groupUsers: state.groupUsers,
    tasks: state.tasks,
    selected: state.selected,
    currentUser: checkCurrentUser(state),
    confirm: state.confirm
  };
};

export default connect(mapStateToProps)(UserProfile);
