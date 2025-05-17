import ReactDOM from "react-dom/client";
import { react, useState, useRef, useEffect, createContext } from "react";
import D from "./d";
import C from "./c";
export const UserContext = createContext();

function App() {
  const [userText, setUserText] = useState(null);
  function changeText(e) {
    setUserText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={userText} onChange={changeText} />
      <p>value: {userText}</p>
      <UserContext.Provider value={userText}>
        <D />
      </UserContext.Provider>
      <C />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
