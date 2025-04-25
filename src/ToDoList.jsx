import React, { useState } from "react";


function ToDoList() {
  const [taks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function inputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  function doneTask(index) {}
  return (
    <div className="to-do-list">
      <h1>Do To List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={inputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {taks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
            <button className="done-button" onClick={() => doneTask(index)}>
              done
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
