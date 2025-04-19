import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";



function Clock() {
  return (
    <>
      <div>
        <h1>Counter</h1>
        <p id="p">0</p>
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
