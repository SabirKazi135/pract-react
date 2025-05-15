import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    setTitle(count);
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtract() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? " red" : "green"));
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <br />
      <button onClick={subtract}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
      <p>---------------------------</p>
      <p style={{ color: color }}>
        Title: {title}, Color: {color}
      </p>
    </>
  );
}
root.render(<App />);
