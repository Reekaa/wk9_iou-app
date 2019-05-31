import React from 'react'

const SubmitButt = (props) => {

  const handleSubmit = () => {
    props.object.tasks.map((task) => {
      if (task.task === props.object.selected.task) {
        let newTask = task
        newTask.whoFor = props.object.selected.user
        newTask.karma = props.object.selected.cost * task.value
        console.log(newTask.karma);
        if (props.object.selected.method === 'Hours') {
          newTask.cost = {hours: props.object.selected.cost}
        } else {
          newTask.cost = {pounds: props.object.selected.cost}
        }
        let whoFor = {};
        console.log(props.object);
        for (let user of props.object.users) {
          if (user.name === props.object.selected.user) {
            whoFor = user
          }
        }
        props.object.addKarmaToUser(whoFor, (0 - newTask.karma))
        props.object.addKarmaToUser(props.object.currentUser, newTask.karma)
        props.object.addTaskToUser(props.object.currentUser, newTask)
        props.object.changeConfirm(true)
      }
    })
  }

  return(
    <>
      <button onClick = {() => {handleSubmit()}}id='submitbutt' type="button" className="btn btn-primary">Add task</button>
    </>
  )
}

export default SubmitButt
