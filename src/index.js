import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  function addTask() {
    const newTask = document.getElementById("inputTask").value;

    document.getElementById("inputTask").value = "";
  }
  return (
    <div id="con">
      <h2>My To-Do List</h2>
      <input type="text" placeholder="Add a new task..." id="inputTask" />{" "}
      <button onClick={addTask}>Add</button>
      <div id="taskBar">
        {taskList.map((task, index) => {
          return (
            <div>
              {task}
              <button>Done</button>
              <button>Down</button>
              <button>Up</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
