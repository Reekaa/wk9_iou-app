import { connect } from "react-redux";
import Header from "../components/MainPage/Header";

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Header);
