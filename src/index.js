import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increament() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increament}>increament</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
