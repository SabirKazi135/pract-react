import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";

function getGreeting(name) {
  return `Hello,  ${name}`;
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>{getGreeting("Sabir")}</h1>
  </>
);
