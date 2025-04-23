import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["sabir", "raees"]);
  const [doneTask, setDoneTask] = useState([]);
  function addTask() {
    const newTask = document.getElementById("inputTask").value;
    setTaskList((t) => [...t, newTask]);
    document.getElementById("inputTask").value = "";
  }

  function done(index) {
    setDoneTask((c) =>
      c.includes(index) ? c.filter((i) => i !== index) : [...c, index]
    );
  }

  function down(params) {}
  function up(params) {}
  function taskDelete(params) {}

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
            <li
              className={`${doneTask.includes(index) ? "doneClick" : ""}`}
              key={index}
            >
              <span>{task}</span>
              <div id="taskButton">
                <button className="done" onClick={() => done(index)}>
                  Done
                </button>
                <button className="move-down" onClick={() => down(index)}>
                  Down
                </button>
                <button className="move-up" onClick={() => up(index)}>
                  Up
                </button>
                <button className="delete" onClick={() => taskDelete(index)}>
                  Delete
                </button>
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
