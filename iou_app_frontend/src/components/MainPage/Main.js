import React from "react";

const Main = props => {
  console.log(props);

  const tasks = () => {
    return <option>task</option>;
  }

  const users = () => {
    return <option>user</option>;
  }


  return(
  <div>

      New Task:
      <select>
        {tasks}
      </select>
      <select>
        {users}
      </select>
      <button>Submit</button>
  </div>
)
};

export default Main;
