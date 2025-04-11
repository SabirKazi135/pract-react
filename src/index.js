import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
function List(props) {
  return <li>I am fruit {props.fruit}</li>;
}

function App() {
  const Fruits = ["Apple", "Banana", "Guava"];
  return (
    <ul>
      {Fruits.map((fruit) => {
        return <List fruit={fruit} />;
      })}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
