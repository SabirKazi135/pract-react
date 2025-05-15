import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  const [n, setN] = useState(0);

  function addCount() {
    setCount((c) => c + 1);
  }
  const [nor, setNor] = useState(0);
  function normal() {
    setNor((n) => n + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <p>------------------------</p>
      <p>{nor}</p>
      <button onClick={normal}>normal</button>
    </>
  );
}
root.render(<App />);
