import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ background: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="">Select a color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
function App() {
  return (
    <>
      <ColorPicker />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
