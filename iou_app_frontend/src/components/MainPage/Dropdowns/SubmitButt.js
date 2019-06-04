import React from 'react'

const SubmitButt = (props) => {
console.log(props.object.currentUser);
  const handleSubmit = () => {
    props.object.tasks.map((task) => {
      if (task.task === props.object.selected.task) {
        let newTask = task
        newTask.whoFor = props.object.selected.user
        newTask.karma = props.object.selected.cost * task.value
        newTask.date = new Date();
        newTask.cost = {hours: props.object.selected.cost}
        let whoFor = {};
        for (let user of props.object.users) {
          if (user.name === props.object.selected.user) {
            whoFor = user
          }
        }
        props.object.addKarmaToUser(whoFor, (0 - newTask.karma))
        props.object.addKarmaToUser(props.object.currentUser, newTask.karma, props.object.currentUser)
        props.object.addTaskToUser(props.object.currentUser, newTask)
        props.object.changeConfirm(true)
      }
    })
    props.updateTaskButton('Select Task')
    props.updateUserButton('Select User')
  }

  return(
    <>
      <button onClick = {() => {handleSubmit()}}id='submitbutt' type="button" className="btn btn-primary">Add Task</button>
    </>
  )
}

export default SubmitButt
