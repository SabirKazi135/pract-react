import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  return (
    <>
    </>
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
