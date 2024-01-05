import React, { useState } from "react";

const JSXChallenge6 = () => {
  let newTime = new Date().toLocaleTimeString();

  const [getTime, setGetTime] = useState(newTime);

  const GetTime = () => {
  let  newTime = new Date().toLocaleTimeString();
    setGetTime(newTime);
  };

  return (
    <>
      <p>{getTime}</p>
      <button onClick={GetTime}>GET TIME</button>
    </>
  );
};

export default JSXChallenge6;
