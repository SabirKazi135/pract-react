import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

let isLoggedIn = true;
let massage = "";

if (isLoggedIn) {
  massage = "Wlcome back";
} else {
  massage = "Please log in";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(massage);
