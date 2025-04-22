import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({
    name: "Guest",
    location: {
      city: "Unknown",
    },
  });

  function change(e) {
    const name = e.target.name;
    const value = e.target.value;
  }
  return (
    <>
      <h2>
        UserName: {profile.name}, <br />
        CityNames:
        <ul>{profile.location.city}</ul>
      </h2>
      <label>
        Name:
        <input type="text" name="name" onChange={change} />
      </label>
      <label>
        Location:
        <input type="text" name="location" onChange={change} />
      </label>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
