import CB from "./CB";
import react, { useState, createContext } from "react";

export const UserContext = createContext();

function CA() {
  const [user, setUser] = useState("SabirKazi");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h3>Hello: {user}</h3>
      <UserContext.Provider value={user}>
        <CB />
      </UserContext.Provider>
    </div>
  );
}

export default CA;
