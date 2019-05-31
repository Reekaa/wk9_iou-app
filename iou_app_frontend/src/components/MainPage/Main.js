import React from "react";
import './mainpage.css'
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';
import NewTask from './NewTask'

const Main = props => {

  return(
    <div className='main-container-grid'>
      <div className='main-container'>
        <NewTask object={props}/>
      </div>
      <div className='user-list-sidebar'>
        <ViewGroupUsersContainer />
      </div>
    </div>
)
};

export default Main;
