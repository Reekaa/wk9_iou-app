import React from "react";
import './mainpage.css'

const Main = props => {

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
        <a onClick={() => {handleTasksDropdown(task.task)}} href="#">{task.task}</a>
      </li>)
  })

  const users = props.users.map((user) => {
    return (
      <li key={user._id}>
        <a onClick={() => {handleUsersDropdown(user.name)}} href="#">{user.name}</a>
      </li>);
  })

  const handleSubmit = () => {
    props.tasks.map((task) => {
      if (task.task === props.selected.task) {
        let newTask = task
        newTask.whoFor = props.selected.user
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
    let taskButton = document.querySelector('#taskDropdown')
    taskButton.textContent = 'Select Task'
    taskButton.appendChild(arrow)
    let userButton = document.querySelector('#userDropdown')
    userButton.textContent = 'Select User'
    userButton.appendChild(arrow2)
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

  const handleNumber = () => {

  }


  return(
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
        <div id='cost-input' class="form-group row">
          <label for="example-number-input" class="col-2 col-form-label">Cost: </label>
          <div id='cost-select' class="col-10">
            <input class="form-control" type="number" placeholder="1" id="example-number-input" onChange={handleNumber}/>
          </div>
        </div>
        <button onClick = {() => {handleSubmit()}}id='submitbutt' type="button" className="btn btn-primary">Submit</button>
      </div>
      {confirmation()}
    </div>
)
};

export default Main;
