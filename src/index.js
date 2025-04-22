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

  function removeFruit(i) {
    setFruits((pf) =>
      pf.filter((_, index) => {
        return i !== index;
      })
    );
  }

  function editFruit(i) {
    const newName = prompt("New name of fruit");
    setFruits((f) => {
      const copy = [...f];
      copy[i] = newName;
      return copy;
    });
  }
  return (
    <>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <>
              <li
                style={{
                  display: "inline-block",
                }}
                key={index}
                onClick={() => removeFruit(index)}
              >
                {fruit}
              </li>
              <button onClick={() => editFruit(index)}>edit</button>
              <br />
            </>
          );
        })}
      </ul>
      <input type="text" id="newFruit" />
      <button onClick={addFruit}>Add</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
