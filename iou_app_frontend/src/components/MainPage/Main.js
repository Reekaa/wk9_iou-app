import React from "react";
import './mainpage.css'

const Main = props => {
  console.log(props);

  const tasks = () => {
    return (<li><a href="#">Babysitting</a></li>)
  }

  const users = () => {
    return (<li><a href="#">Rose</a></li>);
  }


  return(
  <div className='dropdown-container'>
    New Task:
    <div className="dropdown">
      <button id="dropdowns" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        Select Task
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {tasks()}
      </ul>
    </div>
    <div className="dropdown">
      <button id="dropdowns" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        Select User
        <span id="caret" className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {users()}
      </ul>
    </div>
    <button id='submitbutt' type="button" className="btn btn-primary">Submit</button>
  </div>
)
};

export default Main;
