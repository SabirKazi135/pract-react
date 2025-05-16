import { useContext } from "react";
import { UserContext } from "./CA.jsx";
import CD from "./CD";
function CC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h4>Hello: {user}</h4>
      <CD />
    </div>
  );
}

export default CC;
