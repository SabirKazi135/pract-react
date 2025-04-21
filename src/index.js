import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({year: 2024,
    make: "ford",
    model: "Mustag"}
  );
  return (
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
