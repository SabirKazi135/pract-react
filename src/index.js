import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Name Change Word is ${name}`);
  }, [name]);

  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div>Name: {name}</div>
      <input type="text" value={name} onChange={(e) => changeName(e)} />
    </>
  );
}

root.render(<App />);
