import { useContext } from "react";
import { UserContext } from "./CA.jsx";
function CD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component D</h1>
      <h4>bye: {user}</h4>
    </div>
  );
}

export default CD;
