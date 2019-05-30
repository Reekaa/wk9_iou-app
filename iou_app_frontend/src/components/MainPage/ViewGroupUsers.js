import React from "react";
import './mainpage.css'

const ViewGroupUsers = (props) => {

const groupUsersList = props.groupUsers.map((user, i) => {
  return <div key={i} className='user-list-item'>
           <p className='user-list-item-name'>
            {user.name}
          </p>
          <p className='user-list-item-karma'>
            {user.groups[0].karma}
          </p>
        </div>
});

console.log(props);

  return (
    <div className='user-list'>
      {groupUsersList}
    </div>
  )
};

export default ViewGroupUsers;
