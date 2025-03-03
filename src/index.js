import React from "react";
import ReactDOM from "react-dom/client";



function Garage() {
  return (
    <>
      <h1>Who Lives in my Garage</h1>
      <Car color="red" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
