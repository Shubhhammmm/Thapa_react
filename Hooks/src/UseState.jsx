import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState("Shubham");

  const Clicked = () => {
   
   data === "Shubham" ? setData(`Changed`) : setData(`Shubham`);
  };

  return (
    <>
      <p> {data} </p>
      <button onClick={Clicked}> Click Me </button>
    </>
  );
};

export default UseState;
