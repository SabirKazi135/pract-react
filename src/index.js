import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [car, setCar] = useState({ year: 2024, make: "ford", model: "Mustag" });
  return (
    <>
      <p>
        Your fav car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} />
      <br />
      <input type="text" value={car.make} />
      <br />
      <input type="text" value={car.model} />
      <br />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
