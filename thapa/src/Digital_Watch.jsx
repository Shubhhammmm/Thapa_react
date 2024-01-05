import React, { useState } from "react";

const Digital_Watch = () => {
  let time = new Date().toLocaleTimeString();

  const [runningTime, setRunningTime] = useState();

  const Update = () => {
    time = new Date().toLocaleTimeString();
    setRunningTime(time);
  };

  setInterval(Update, 1000);

  return (
    <>
      <h1> {time} </h1>
    </>
  );
};

export default Digital_Watch;
