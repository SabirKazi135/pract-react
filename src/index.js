import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {}

  function removeCar() {}

  function yearChange() {}
  return <></>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
