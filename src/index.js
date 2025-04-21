import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  return (
    <form action="">
      <label htmlFor="">
        Enter Your Name:
        <input type="text" />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
