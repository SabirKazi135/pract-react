import React from "react";
import ReactDom from "react-dom/client";
import "./App.css";

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

const mycar = new Car("Ford");

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>this is the car {mycar.brand}</h1>
    <p>hello, {mycar.present()}</p>
  </>
);
