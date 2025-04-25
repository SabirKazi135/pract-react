import React, { useState } from "react";

function ToDoList() {
  const [taks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function inputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <div className="TodoList">
      <h1>Do To List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={inputChange}
        />
      </div>
    </div>
  );
}

export default ToDoList;
