import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({ year: 2024, make: "ford", model: "Mustag" });
  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {}
  function handleModelChange(e) {}
  return (
    <>
      <p>
        Your fav car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
