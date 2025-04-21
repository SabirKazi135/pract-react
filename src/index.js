import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
