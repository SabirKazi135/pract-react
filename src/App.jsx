import { useEffect, useState, useRef } from "react";

function App() {
  const userRef1 = useRef(null);
  const userRef2 = useRef(null);
  const userRef3 = useRef(null);
  useEffect(() => {
    console.log("component rendered");
  });

  function handleClick1() {
    userRef1.current.focus();
    userRef1.current.style.backgroundColor = "red";
    userRef2.current.style.backgroundColor = "white";
    userRef3.current.style.backgroundColor = "white";
  }
  function handleClick2() {
    userRef2.current.focus();
    userRef1.current.style.backgroundColor = "white";
    userRef2.current.style.backgroundColor = "red";
    userRef3.current.style.backgroundColor = "white";
  }
  function handleClick3() {
    userRef3.current.focus();
    userRef1.current.style.backgroundColor = "white";
    userRef2.current.style.backgroundColor = "white";
    userRef3.current.style.backgroundColor = "red";
  }
  return (
    <>
      <button onClick={handleClick1}>Click Me 1!</button>
      <input type="text" ref={userRef1} />
      <br />
      <button onClick={handleClick2}>Click Me 2!</button>
      <input type="text" ref={userRef2} />
      <br />
      <button onClick={handleClick3}>Click Me 3!</button>
      <input type="text" ref={userRef3} />
      <br />
    </>
  );
}

export default App;
