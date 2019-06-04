import { connect } from 'react-redux';
import ViewGroupUsers from '../components/MainPage/ViewGroupUsers';

const checkCurrentUser = (state) => {
  if (state.currentUser.name === null) {
    return null
  } else {
    return (state.currentUser.groups[0].groupName);
  }
}

const mapStateToProps = (state) => {
  // map state.currentUser to generate jsx LIs
  // return list of users with names and karma ratings

  return {
    groupName: checkCurrentUser(state),
    // groupName: state.currentUser.groups[0].groupName,
    groupUsers: state.groupUsers
  }
}

export default connect(mapStateToProps)(ViewGroupUsers);
