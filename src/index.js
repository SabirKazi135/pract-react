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

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + "', it is a " + this.model;
  }
}

const mycar = new Car("Ford");
const myfor = new Model("Toyota", "Fortune");

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>this is the car {mycar.brand}</h1>
    <p>hello, {mycar.present()}</p>
    <h1>this is the car {myfor.brand}</h1>
    <p>hello, {myfor.show()}</p>
  </>
);
