import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function Clock() {
  const p = document.getElementById("p");
  const [count, setCount] = useState(0);
  function decreament() {
    setCount(count - 1);
  }
  function increament() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <h1>Counter</h1>
        <p id="p">{count}</p>
        <button onClick={decreament}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increament}>+</button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Clock />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
