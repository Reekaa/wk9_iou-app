import React from "react";

const SubmitButt = props => {
  const handleSubmit = () => {
    props.tasks.map(task => {
      if (task.task === props.selected.task) {
        let newTask = task;
        newTask.whoFor = props.selected.user;
        newTask.karma = props.selected.cost * task.value;
        newTask.date = new Date();
        newTask.cost = {
          hours: props.selected.cost
        };
        let whoFor = {};
        for (let user of props.users) {
          if (user.name === props.selected.user) {
            whoFor = user;
          }
        }
        props.addKarmaToUser(whoFor, 0 - newTask.karma);
        props.addKarmaToUser(
          props.currentUser,
          newTask.karma,
          props.currentUser
        );
        props.addTaskToUser(props.currentUser, newTask);
        props.changeConfirm(true);
      }
    });
    props.updateTaskButton("Select Task");
    props.updateUserButton("Select User");
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
