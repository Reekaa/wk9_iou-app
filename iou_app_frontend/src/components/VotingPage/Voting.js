import React from 'react';
import './Voting.css';

const Voting = props => {

  

  return (
    <div className="voting-page">
      <form>
        <div className="user">{props.currentUser.name}</div>
          <div>
            <lable htmlFor="taskDropdown">Choose a task</lable>
              <button id="taskDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                <span id="caret" className="caret"></span>
              </button>
          </div>
        <div>
          <lable htmlFor="voting">Vote for karma points</lable>
            <div id='voting' className="col-10">
              <input className="form-control" type="number" placeholder='0' id="example-number-input"/>
            </div>
        </div>
        <div>
          <input id="submit" type="submit" value="Vote" />
        </div>
      </form>
    </div>
  )

}

export default Voting;
