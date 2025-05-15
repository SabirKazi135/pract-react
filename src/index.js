import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", hadnleResize);
    console.log("Evenet Listner Added");
    return () => {
      window.removeEventListener("resize", hadnleResize);
      console.log("Event removed");
    };
  }, []);

  useEffect(
    () => {
      document.title = `Size: ${width} x ${height}`;
    },
    [width],
    height
  );
  function hadnleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Windows Width: {width}px</p>
      <p>Windows Height: {height}px</p>
    </>
  );
}
root.render(<App />);
