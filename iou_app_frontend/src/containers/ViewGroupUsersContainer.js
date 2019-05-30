import { connect } from 'react-redux';
import ViewGroupUsers from '../components/ViewGroupUsers';
import filteredUsers from '../helpers/filtered_users';

const mapStateToProps = (state) => {
  // use filteredUsers function to filter users by group
  // map filtered users to generate jsx LIs
  // return list of  with names and karma ratings
  const groupName = state.currentUser.groups[0].groupName;
  const usersOnProps = filteredUsers(state.users, groupName);
  return
}
