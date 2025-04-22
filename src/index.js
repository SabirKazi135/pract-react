import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  function changeInput(e) {
    setInputText(e.target.value);
  }
  function changeNumber(e) {
    setInputNumber(e.target.value);
  }
  return (
    <>
      <input type="text" value={inputText} onChange={changeInput} />
      <p>Text: {inputText}</p>
      <input type="number" value={inputNumber} onChange={changeNumber} />
      <p>Number: {inputNumber}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
