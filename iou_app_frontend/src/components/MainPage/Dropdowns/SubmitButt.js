import React from "react";

const SubmitButt = props => {

  const handleSubmit = () => {

    const newTask = {
      ...props.taskButton,
      whoFor: props.userButton.name,
      karma: props.duration * props.taskButton.value,
      date: new Date(),
      cost: {hours:props.duration}
    }

    if(props.userButton  && props.taskButton && props.duration>0) {
      props.addTaskToUser(props.currentUser, newTask)
      props.addKarmaToUser(props.currentUser, newTask.karma) // add karma to current user
      props.addKarmaToUser(props.userButton, 0 - newTask.karma) //subtract karma from who you helped
      props.updateTaskButton({_id: null, task: "Select Task"});
      props.updateUserButton({_id: null, name: "Select User"});
      props.updateDuration('')
      props.updateUserMessage('complete form')
      setTimeout(() => {
        props.updateUserMessage('');
      }, 2500);
    }else{
      props.updateUserMessage('incomplete form')
      setTimeout(() => {
        props.updateUserMessage('');
      }, 2500);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
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
