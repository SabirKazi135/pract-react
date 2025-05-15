import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [name, setName] = useState("");
  const [character, setCharacter] = useState(0);

  useEffect(() => {
    setCharacter(name.length);
  }, [name]);

  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <>
      <div>Name: {name}</div>
      <input type="text" value={name} onChange={(e) => changeName(e)} />
      <p>Total Character: {character}</p>
    </>
  );
}

root.render(<App />);
