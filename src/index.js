import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count}`;
  });
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
root.render(<App />);
