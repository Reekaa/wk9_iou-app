import { connect } from "react-redux";
import Main from "../components/MainPage/Main";

const mapStateToProps = state => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Main);
