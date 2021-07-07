import { connect } from "react-redux";
import UserProfile from "../components/UserProfilePage/UserProfile";

const checkCurrentUser = (state) => {

  if (state.currentUser.name === null) {
    return null
  } else {
    return (state.currentUser);
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    groupUsers: state.groupUsers,
    tasks: state.tasks,
    selected: state.selected,
    // currentUser: state.currentUser,
    currentUser: checkCurrentUser(state),
    confirm: state.confirm
  };
};


export default connect(mapStateToProps)(UserProfile);
