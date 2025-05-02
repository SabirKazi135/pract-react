import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
