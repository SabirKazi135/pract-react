import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function MyComponent() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(18);
  const [isEmployed, setIsEmployed] = useState(false);

  function updateAge() {
    setAge(age + 2);
  }
  function employee() {
    setIsEmployed(!isEmployed);
  }
  return (
    <>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Update Age</button>
      <p>Employee: {isEmployed ? "True" : "False"}</p>
      <button onClick={employee}>Update employee</button>
    </>
  );
}

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
