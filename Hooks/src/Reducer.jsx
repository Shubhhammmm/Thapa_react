import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const initialState = 0;

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p> {state} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> INC</button> 
      <button onClick={() => dispatch({ type: "DECREMENT" })}> DEC</button>
    </>
  );
};

export default Reducer;
