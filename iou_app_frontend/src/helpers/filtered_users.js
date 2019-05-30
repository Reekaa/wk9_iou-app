// filter the users to return an array of the ones in the relevant group
const filteredUsers = (users, group) => {
  return users.filter(user => {
    return user.groups[0].groupName === group;
  })
}

module.exports = filteredUsers;
