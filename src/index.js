import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function Car(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
