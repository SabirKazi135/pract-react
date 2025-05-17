import ReactDOM from "react-dom/client";
import { react, useState, useRef, useEffect } from "react";

function App() {
  const [userText, setUserText] = useState(null);
  function changeText(e) {
    setUserText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={userText} onChange={(e) => changeText()} />
      <p>value: {userText}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
