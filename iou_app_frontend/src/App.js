import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import MainPageContainer from "./containers/MainPageContainer";
import HeaderContainer from "./containers/HeaderContainer"
import LoginFormContainer from "./containers/LoginFormContainer";
import GroupPageContainer from "./containers/GroupPageContainer";
import About from "./components/MainPage/About.js"
import UserProfileContainer from "./containers/UserProfileContainer";
import {BrowserRouter as Router, Route} from "react-router-dom";
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
              render={(routeProps) => (
                <HeaderContainer {...routeProps}/>
              )}
            />
            <Route
              exact path='/'
              render={(routeProps) => (
                <LoginFormContainer {...routeProps}/>
              )}
            />
            <Route
              exact path='/newtask'
              render={(routeProps) => (
                <MainPageContainer {...routeProps} {...this.state} switchRedirect = {this.switchRedirect} />
              )}
            />
            <Route
              exact path='/groups'
              render={(routeProps) => (
                <GroupPageContainer {...routeProps} {...this.state} switchRedirect = {this.switchRedirect} />
              )}
            />
            <Route
              exact path='/about'
              render={(routeProps) => (
                <About {...routeProps} {...this.state} switchRedirect = {this.switchRedirect} />
              )}
            />
            <Route
              exact path='/profile'
              render={(routeProps) => (
                <UserProfileContainer {...routeProps} {...this.state} switchRedirect = {this.switchRedirect} />
              )}
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
