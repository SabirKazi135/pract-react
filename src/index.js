import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  function addCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add</button>
    </>
  );
}

root.render(<App />);
