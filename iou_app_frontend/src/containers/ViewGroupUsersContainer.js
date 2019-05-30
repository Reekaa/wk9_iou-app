import { connect } from 'react-redux';
import ViewGroupUsers from '../components/ViewGroupUsers';
import filteredUsers from '../helpers/filtered_users';

const mapStateToProps = (state) => {
  // map state.currentUsers to generate jsx LIs
  // return list of  with names and karma ratings
  return {
    groupName: state.currentUser.groups[0].groupName,
    groupUsers: state.groupUsers
  }
}

export default connect(mapStateToProps)(ViewGroupUsers);
