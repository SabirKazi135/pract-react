import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
