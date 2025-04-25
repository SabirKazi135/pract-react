import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
