import { connect } from 'react-redux';
import ViewGroupUsers from '../components/MainPage/ViewGroupUsers';

const mapStateToProps = (state) => {
  // map state.currentUser to generate jsx LIs
  // return list of users with names and karma ratings
  return {
    // groupName: state.currentUser.groups[0].groupName,
    groupUsers: state.groupUsers
  }
}

export default connect(mapStateToProps)(ViewGroupUsers);
