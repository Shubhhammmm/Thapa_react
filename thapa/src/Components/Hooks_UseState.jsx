import React, { useState } from "react";
import "./Hooks_UseState.css";
import AddIcon from '@material-ui/icons/Add';





const Hooks_UseState = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert("Sorry")
    }

  };

  return (
    <>
      <div>
        <h1 style={{ color: count > 0 ?  "green" : "red" }}>{count}</h1>
        <button className="button" onClick={Increment}>
        <AddIcon/>
        </button>
        <button className="button" onClick={Decrement}>
         Decrement
        </button>
      </div>
    </>
  );
};

export default Hooks_UseState;
