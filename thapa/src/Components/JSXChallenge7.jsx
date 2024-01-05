import React, { useEffect, useState } from "react";

const JSXChallenge7 = () => {
  const [incre, setIncre] = useState(0);

  useEffect(() => {
    document.title = `You Clicked me ${incre} times`;
  });

  const Increment = () => {
    setIncre(incre + 1);
  };

  return (
    <>
      <button onClick={Increment}>Click Me {incre} </button>
    </>
  );
};

export default JSXChallenge7;
