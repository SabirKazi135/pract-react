import { useContext } from "react";
import { UserContext } from "./index.js";

function D() {
  const userText = useContext(UserContext);
  return (
    <>
      <h2>htis is amother</h2>
      <p>passed msg is : {userText}</p>
    </>
  );
}

export default D;
