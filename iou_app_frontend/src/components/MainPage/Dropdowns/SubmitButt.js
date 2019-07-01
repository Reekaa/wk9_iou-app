import React from "react";

const SubmitButt = props => {

  const handleSubmit = () => {
    // props.object.tasks.map(task => {
    //   // console.log(task);
    //   if (task.task === props.object.selected.task) {                        //FIND THE SELECTED TASK - not required anymore
    //     let newTask = task;                                                  // new task is the task object {_id,task,value}
    //     newTask.whoFor = props.object.selected.user;                         // add whoFor as props.state.userButton.name
    //     newTask.karma = props.object.selected.cost * task.value;             // add karma as props.state.duration * task.value
    //     newTask.date = new Date();                                           // add date as new Date()
    //     newTask.cost = {                                                     // add cost as {hours: props.state.duration}
    //       hours: props.object.selected.cost
    //     };
    //     let whoFor = {};                                                     // create whoFor {} === props.state.userButton.name
    //     for (let user of props.object.users) {
    //       if (user.name === props.object.selected.user) {
    //         whoFor = user;
    //       }
    //     }
    //     props.object.addKarmaToUser(whoFor, 0 - newTask.karma);              // subtract newtask.karma from whoFor
    //     props.object.addKarmaToUser(                                         // add karma to current user (user, newKarma, currentUser)
    //       props.object.currentUser,
    //       newTask.karma,
    //       props.object.currentUser
    //     );
    //     props.object.addTaskToUser(props.object.currentUser, newTask);       // post newtask to database
    //     props.object.changeConfirm(true);
    //   }
    // });

    const newTask = {
      ...props.state.taskButton,
      whoFor: props.state.userButton.name,
      karma: props.state.duration * props.state.taskButton.value,
      date: new Date(),
      cost: {hours:props.state.duration}
    }
    if(props.state.userButton && props.state.duration && props.state.taskButton) {
      props.props.props.addTaskToUser(props.props.props.currentUser, newTask)
      props.props.props.addKarmaToUser(props.props.props.currentUser, newTask.karma) // add karma to current user
      props.props.props.addKarmaToUser(props.state.userButton, 0 - newTask.karma) //subtract karma from who you helped
      props.updateTaskButton({_id: null, task: "Select Task"});
      props.updateUserButton({_id: null, name: "Select User"});
      props.updateDuration('')
    }else{
      console.log('need to fill out form correctly');
    }
  };

  return (
    <>
      <button
        onClick={() => {handleSubmit()}}
        id="submitbutt"
        type="button"
        className="btn btn-primary"
      >
        Submit Completed Task
      </button>
    </>
  );
};

export default SubmitButt;
