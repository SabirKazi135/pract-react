import ReactDOM from "react-dom/client";
import { react, useState, useRef, useEffect } from "react";

function App() {
  const ref = useRef(0);
  useEffect(() => {
    console.log("Component Render");
  });
  function handleClick() {
    ref.current++;
    console.log(ref.current);
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
