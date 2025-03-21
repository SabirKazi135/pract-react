import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";

const array = ["Apple", "Banana", "Orange"];
const arr = array.map((ar) => {
  return <li>{ar}</li>;
});
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <ul>{arr}</ul>
  </>
);
