import { connect } from "react-redux";
import GroupPage from "../components/MainPage/Main";

const mapStateToProps = state => {
  return {
    groupUsers: state.groupUsers,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(GroupPage);
