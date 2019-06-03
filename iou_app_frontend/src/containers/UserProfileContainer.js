import { connect } from "react-redux";
import UserProfile from "../components/UserProfilePage/UserProfile";

const mapStateToProps = state => {
  return {
    users: state.users,
    groupUsers: state.groupUsers,
    tasks: state.tasks,
    selected: state.selected,
    currentUser: state.currentUser,
    confirm: state.confirm
  };
};

export default connect(mapStateToProps)(UserProfile);
