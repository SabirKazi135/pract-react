import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add</button>
    </>
  );
}

root.render(<App />);
