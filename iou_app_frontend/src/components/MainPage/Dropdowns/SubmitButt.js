import React from "react";

const SubmitButt = props => {

  const handleSubmit = () => {

    const newTask = {
      ...props.state.taskButton,
      whoFor: props.state.userButton.name,
      karma: props.state.duration * props.state.taskButton.value,
      date: new Date(),
      cost: {hours:props.state.duration}
    }
    
    if(props.state.userButton  && props.state.taskButton && props.state.duration>0) {
      props.props.props.addTaskToUser(props.props.props.currentUser, newTask)
      props.props.props.addKarmaToUser(props.props.props.currentUser, newTask.karma) // add karma to current user
      props.props.props.addKarmaToUser(props.state.userButton, 0 - newTask.karma) //subtract karma from who you helped
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
