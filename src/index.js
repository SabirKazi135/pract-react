import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function addFood(e) {}

  function removeFood(e) {}
  return (
    <>
      <h2>List of Goods</h2>
      <ul>
        {foods.map((food, index) => {
          return <li key={index}>{food}</li>;
        })}
      </ul>
      <input type="text" id="foodinput" placeholder="Enter food name" />
      <button onClick={addFood}>Add Food</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
