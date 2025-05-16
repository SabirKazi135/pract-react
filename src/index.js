import ReactDOM from "react-dom/client";
import { react, useState, useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log("Component Render");
  });
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
