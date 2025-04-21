import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(10);

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
      <input type="number" value={name} onChange={handleChange} />
      <p>Number: {quantity}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
