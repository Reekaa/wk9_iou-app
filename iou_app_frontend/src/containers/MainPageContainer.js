import { connect } from "react-redux";
import Main from "../components/MainPage/Main";



const mapDispatchToProps = dispatch => ({

  addTaskToUser(currentUser, newTask) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${currentUser._id}/task`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {dispatch(() =>{
        fetch('http://localhost:3000/api/users')
        .then(res => {
          return res.json().then(users => {
            dispatch({
            type:'ADD_USERS',
            users
          });
          if (currentUser) {
          const groupUsers = users.filter(user => {
            return user.groups[0].groupName === currentUser.groups[0].groupName;
          })
          dispatch({
            type:'SET_GROUP_USERS',
            groupUsers
          })}

        })
        })
      })
    }); //currentUser param added
    })
  },

  addKarmaToUser(user, newKarma, currentUser) {
    let updateKarma = {karma: newKarma}
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${user._id}/karma`, {
        method: 'PUT',
        body: JSON.stringify(updateKarma),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => res.json())
      .then(users => {
        dispatch({
          type:'ADD_USERS',
          users
        })
      })
    })
  },

  createNewTask(taskName) {
    let newTask = {task: taskName, value: 10}
    dispatch (() => {
      fetch(`http://localhost:3000/api/tasks`, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => res.json())
      .then(tasks =>{
        dispatch({
          type:'ADD_TASKS',
          tasks
        })
      });
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

});

const mapStateToProps = state => {
  return {
    users: state.users,
    groupUsers: state.groupUsers,
    currentUser: state.currentUser,
    tasks: state.tasks,
    confirm: state.confirm
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
