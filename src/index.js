import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [foods ,setFoods ] = useState(["Apple", "Orange", "Banana"]);

  function addFood(e) {
    
  }

  function removeFood(e) {
    
  }
  return (
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
