import React from "react";
import './mainpage.css'
import ViewGroupUsersContainer from '../../containers/ViewGroupUsersContainer';

const Main = props => {
  console.log(props);

  const handleTasksDropdown = (evt) => {
    props.selectTask(evt)
    let button = document.querySelector('#taskDropdown')
    button.textContent = evt
    props.changeConfirm(false)
  }

  const handleUsersDropdown = (evt) => {
    props.selectUser(evt)
    let button = document.querySelector('#userDropdown')
    button.textContent = evt
    props.changeConfirm(false)
  }

  const tasks = props.tasks.map((task) => {
    return (
      <li  key={task._id}>
        <div id='dropdown-option' onClick={() => {handleTasksDropdown(task.task)}}>{task.task}</div>
      </li>)
  })

  const users = props.groupUsers.map((user) => {
    return (
      <li key={user._id}>
        <div id='dropdown-option' onClick={() => {handleUsersDropdown(user.name)}}>{user.name}</div>
      </li>);
  })

  const handleSubmit = () => {
    props.tasks.map((task) => {
      if (task.task === props.selected.task) {
        let newTask = task
        newTask.whoFor = props.selected.user
        if (props.selected.method === 'Hours') {
          newTask.cost = {hours: props.selected.cost}
        } else {
          newTask.cost = {pounds: props.selected.cost}
        }
        props.addTaskToUser(props.currentUser, newTask)
        props.changeConfirm(true)
      }
    })
    let arrow = document.createElement('span')
    arrow.id = 'caret'
    arrow.classList.add('caret')
    let arrow2 = document.createElement('span')
    arrow2.id = 'caret'
    arrow2.classList.add('caret')
    let arrow3 = document.createElement('span')
    arrow3.id = 'caret'
    arrow3.classList.add('caret')
    let taskButton = document.querySelector('#taskDropdown')
    taskButton.textContent = 'Select Task'
    taskButton.appendChild(arrow)
    let userButton = document.querySelector('#userDropdown')
    userButton.textContent = 'Select User'
    userButton.appendChild(arrow2)
    let costButton = document.querySelector('#costDropdown')
    costButton.textContent = 'Select Cost'
    costButton.appendChild(arrow3)
    let costdrop = document.querySelector('#example-number-input')
    costdrop.value = '1'
  }

  const confirmation = () => {
    if(props.confirm === true){
    return (
      <div className='confirm-text'>
        Task submitted!
      </div>
    )}else{
      return <div></div>
    }
  }

  const costHours = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Hours')}}>Hours</div>
      </li>
    )
  }
  const costPounds = () => {
    return (
      <li>
        <div id='dropdown-option' onClick={() => {handleCostDropdown('Pounds')}}>Pounds</div>
      </li>
    )
  }

  const handleCostDropdown = (evt) => {
    props.costMethod(evt)
    let button = document.querySelector('#costDropdown')
    button.textContent = evt
    props.changeConfirm(false)
  }



  const handleNumber = (evt) => {
    props.selectCost(evt.target.value)
    props.changeConfirm(false)
  }


  return(
    <div className='main-container-grid'>
      <div className='main-container'>
        <div className='dropdown-container'>
          New Task:
          <div className="dropdown">
            <button id="taskDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Select Task
              <span id="caret" className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {tasks}
            </ul>
          </div>
          <div className="dropdown">
            <button id="userDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Select User
              <span id="caret" className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {users}
            </ul>
          </div>
          <div id='cost-input' className="form-group row">
            <label className="col-2 col-form-label">Cost: </label>
            <div id='cost-select' className="col-10">
              <input className="form-control" type="number" placeholder='0' id="example-number-input" onChange={handleNumber}/>
            </div>
          </div>
          <div className="dropdown">
            <button id="costDropdown" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Select Cost
              <span id="caret" className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {costHours()}
              {costPounds()}
            </ul>
          </div>

          <button onClick = {() => {handleSubmit()}}id='submitbutt' type="button" className="btn btn-primary">Add task</button>
        </div>
        {confirmation()}
      </div>
      <div className='user-list-sidebar'>
        <ViewGroupUsersContainer />
      </div>
    </div>
)
};

export default Main;
