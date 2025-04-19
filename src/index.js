import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function Button() {
  const [textState, setState] = useState("hidden");

  return (
    
  )
}

function App() {
  return <Button />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
