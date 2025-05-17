import { useContext } from "react";
import { UserContext } from "./index.js";

function C() {
  const userText = useContext(UserContext);
  return (
    <>
      <p>thisn is third one</p>
      <p>mesge: {userText}</p>
    </>
  );
}

export default C;
