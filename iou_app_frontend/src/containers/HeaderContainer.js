import { connect } from "react-redux";
import Header from "../components/MainPage/Header";

const mapDispatchToProps = dispatch => ({
  toggleCurrentUser(user) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${user._id}/current`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
    })
  }
})

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
