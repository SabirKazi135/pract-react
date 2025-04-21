import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Enter Your Name:
        <input
          onChange={handleChange}
          type="text"
          name="usename"
          value={input.username || ""}
        />
      </label>
      <label htmlFor="">
        Enter Your Age:
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={input.age || ""}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
