import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function Button() {
  const [textBack, setBack] = useState("red");
  function change() {
    if (textBack === "red") {
      setBack("green");
    } else {
      setBack("red");
    }
  }
  return (
    <>
      <p style={{ background: textBack }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis
        nulla eligendi, quae, reiciendis veniam quod quam, labore placeat
        voluptas commodi consequuntur sit distinctio eius enim laborum nisi
        nihil dolore.
      </p>
      <button onClick={change}>change</button>
    </>
  );
}

function App() {
  return <Button />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
