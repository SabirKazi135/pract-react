import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(10);
  const [comment, setComment] = useState("");

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Number: {quantity}</p>
      <textarea
        name=""
        id=""
        value={comment}
        onChange={handleChange}
      ></textarea>
      <p>comment: {comment}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
