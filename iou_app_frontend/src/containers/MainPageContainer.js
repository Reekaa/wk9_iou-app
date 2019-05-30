import { connect } from "react-redux";
import Main from "../components/MainPage/Main";

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(Main);
