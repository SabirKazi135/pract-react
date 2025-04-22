import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  function changeInput(e) {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <input type="text" name="name" onChange={changeInput} />
      <p>User Name: {formData.name}</p>
      <input type="number" name="age" onChange={changeInput} />
      <p>Age: {formData.age}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
