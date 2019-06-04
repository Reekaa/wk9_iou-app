import React from 'react';
import './Voting.css';

const Voting = props => {

  return (
    <div className="voting-page">
      <div className="user">{props.currentUser.name}</div>
      
    </div>
  )

}

export default Voting;
