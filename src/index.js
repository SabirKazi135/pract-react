import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["sabir", "raees"]);
  function addTask() {
    const newTask = document.getElementById("inputTask").value;

    document.getElementById("inputTask").value = "";
  }
  return (
    <div id="con">
      <h2>My To-Do List</h2>
      <input type="text" placeholder="Add a new task..." id="inputTask" />{" "}
      <button onClick={addTask} id="addButton">
        Add
      </button>
      <ul id="taskBar">
        {taskList.map((task, index) => {
          return (
            <li>
              {task}
              <div id="taskButton">
                <button className="done">Done</button>
                <button className="move-down">Down</button>
                <button className="move-up">Up</button>
                <button className="delete">Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
