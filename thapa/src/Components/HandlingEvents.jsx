import React, { useState } from "react";
import "./HandlingEvents.css";

const HandlingEvents = () => {
  const purple = "#8e44ad";

  const [bg, setBg] = useState(purple);
  const[name , setName] = useState("Click Me")

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("Ouch!! 😓")
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onDoubleClick={bgChange}> {name} </button>
      </div>
    </>
  );
};

export default HandlingEvents;
