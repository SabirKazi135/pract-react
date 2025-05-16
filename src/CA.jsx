import CB from "./CB";
import react, { useState } from "react";

function CA() {
  const [user, setUser] = useState("SabirKazi");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h3>Hello: {user}</h3>
      <CB />
    </div>
  );
}

export default CA;
