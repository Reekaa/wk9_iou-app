import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageContainer from "./containers/MainPageContainer";
// import containers
import "./App.css";

class App extends Component {
  componentDidMount() {
    
    //anything you want to run straight away
  }

  render() {
    return (
      <div className="App">
        Hello
        <MainPageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData() {
    dispatch(() => {
      fetch(`http://localhost:3000/api/users`)
        .then(res => res.json())
        .then(users => {
          dispatch({
            type: "ADD_USERS",
            users
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
