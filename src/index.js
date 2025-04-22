import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  
  return (
    <>
      <input type="text" value={inputText} onChange={changeInput} />
      <p>Text: {}</p>
      <input type="number" value={inputNumber} onChange={changeInput} />
      <p>Number: {}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
