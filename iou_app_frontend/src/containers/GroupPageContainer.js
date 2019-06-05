import { connect } from "react-redux";
import GroupPage from "../components/GroupPage/GroupPage";

const mapDispatchToProps = (dispatch) => ({
  getNewData(currentUser) {
    dispatch(() =>{
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
          },
  addRequestToUser(currentUser, newRequest) {
    console.log(newRequest);
    dispatch (() => {
      fetch(`http://localhost:3000/api/users/${currentUser._id}/request`, {
        method: 'PUT',
        body: JSON.stringify(newRequest),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        this.getNewData(currentUser);
      });
    })
  }
})



const mapStateToProps = state => {
  return {
    groupUsers: state.groupUsers,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
