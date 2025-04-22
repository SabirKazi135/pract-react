import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Orange", "banana"]);
  function addFruit() {
    const newFruit = document.getElementById("newFruit").value;
    setFruits((f) => [...f, newFruit]);
    document.getElementById("newFruit").value = "";
  }
  return (
    <>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <input type="text" id="newFruit" />
      <button onClick={addFruit}>Add</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
