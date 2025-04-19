import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function Button() {
  const handleClick = (e) => {
    e.target.textContent = "ouch";
  };
  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click Me</button>
    </>
  );
}

function App() {
  return (
    <>
      <Button />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
