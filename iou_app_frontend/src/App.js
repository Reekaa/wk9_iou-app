import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MainPageContainer from "./containers/MainPageContainer";
import HeaderContainer from "./containers/HeaderContainer"
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginFormContainer from "./containers/LoginFormContainer";
// import containers
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.getData()
    this.props.getTasksData()
    //anything you want to run straight away
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route
              path='/'
              component={HeaderContainer}
            />
            <Route
              exact path='/'
              component={MainPageContainer}
            />
            <Route
              exact path='/login'
              component={LoginFormContainer}
            />
          </Fragment>
        </Router>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      dispatch(() =>{
        fetch('http://localhost:3000/api/users')
        .then(res => {
          return res.json().then(users => {
          dispatch({
            type:'ADD_USERS',
            users
          })
        })
        })
      })
    },
    getTasksData() {
      dispatch(() =>{
        fetch('http://localhost:3000/api/tasks')
        .then(res => {
          return res.json().then(tasks => {
          dispatch({
            type:'ADD_TASKS',
            tasks
          })
        })
        })
      })
    }

  }
}


export default connect(
  null,
  mapDispatchToProps
)(App);
