import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function Button() {
  const [textState, setState] = useState("hidden");
  const [buttonText, setText] = useState("hide");

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis
        nulla eligendi, quae, reiciendis veniam quod quam, labore placeat
        voluptas commodi consequuntur sit distinctio eius enim laborum nisi
        nihil dolore.
      </p>
      <button>{buttonText}</button>
    </>
  );
}

function App() {
  return <Button />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
