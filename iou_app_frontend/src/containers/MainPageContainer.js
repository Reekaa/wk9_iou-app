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
  addTaskToUser(currentUser, newTask) {
    console.log("CURRENTUSER", currentUser);
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${currentUser._id}/task`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => response.json());
    })
  },
  changeConfirm(confirm) {
    dispatch({
      type: 'CONFIRM_TASK',
      confirm
    })
  }
})

const mapStateToProps = state => {
  return {
    users: state.users,
    tasks: state.tasks,
    selected: state.selected,
    currentUser: state.currentUser,
    confirm: state.confirm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
