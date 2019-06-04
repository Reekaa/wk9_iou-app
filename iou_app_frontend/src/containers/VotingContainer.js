import { connect } from "react-redux";
import Voting from "../components/VotingPage/Voting";

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

export default connect(mapStateToProps)(Voting);
