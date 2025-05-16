import ReactDOM from "react-dom/client";
import { react, useState, useRef } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button>Click Me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
