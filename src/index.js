import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function addFood(e) {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setFoods((f) => [...f, newFood]);
  }

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
      <button onClick={removeFood}>Remove Food</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
