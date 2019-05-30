import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageContainer from "./containers/MainPageContainer";
import Header from "./components/MainPage/Header"
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
        <Header />
        <MainPageContainer />
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
