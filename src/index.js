import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";

function hello() {
  return "Hello World Sabir";
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>{hello()}</h1>
  </>
);
