import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);
  const [incre, setIncre] = useState(false);
  const [decre, setDecre] = useState(false);

  useEffect(() => {
    console.log("Increment is  clicked");
  }, [incre]);

  useEffect(() => {
    console.log("Decrement is clicked");
  }, [decre]);

  const increment = () => {
    setCount(count + 1);
    setIncre(!incre);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
    setDecre(!decre);
  };

  return (
    <>
      <h1> {count} </h1>

      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
    </>
  );
};

export default Useeffect;
