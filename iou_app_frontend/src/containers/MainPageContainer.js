import { connect } from "react-redux";
import Main from "../components/MainPage/Main";


const mapDispatchToProps = dispatch => ({
  selectTask(selectedTask) {
    dispatch({
      type: 'ADD_SELECTED_TASK',
      selectedTask
    })
  },
  selectUser(selectedUser) {
    dispatch({
      type: 'ADD_SELECTED_USER',
      selectedUser
    })
  },
  selectCost(selectedCost) {
    dispatch({
      type: 'ADD_SELECTED_COST',
      selectedCost
    })
  },
  costMethod(costMethod) {
    dispatch({
      type: 'ADD_SELECTED_COST_METHOD',
      costMethod
    })
  },
  addTaskToUser(currentUser, newTask) {
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${currentUser._id}/task`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {this.getNewData()});
    })
  },
  addKarmaToUser(user, newKarma, currentUser) {
    let karma = {karma: newKarma}

    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${user._id}/karma`, {
        method: 'PUT',
        body: JSON.stringify(karma),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
      .then(this.getNewData(currentUser));
    })
  },
  createNewTask(taskName) {
    let newTask = {task: taskName, value: 5}
    dispatch (() => {
      fetch(`http://localhost:3000/api/tasks`, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json())
      .then(this.getTasksData());
    })
  },
  changeConfirm(confirm) {
    dispatch({
      type: 'CONFIRM_TASK',
      confirm
    })
  },
  getNewData(currentUser) {
    dispatch(() =>{
      fetch('http://localhost:3000/api/users')
      .then(res => {
        return res.json().then(users => {
          console.log(users);
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
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
