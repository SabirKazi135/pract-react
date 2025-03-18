import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";

const x = 5;
let text = "GoodBye";
if (x < 10) {
  text = "Hello";
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(text);
