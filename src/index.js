import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(0);
  useEffect(() => {
    setTitle(count);
  });

  function addCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <p>---------------------------</p>
      <p>Title: {title}</p>
    </>
  );
}
root.render(<App />);
