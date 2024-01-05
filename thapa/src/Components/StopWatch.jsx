import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);

  let timer = useRef();

  const start = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    },1000);
  };

  const stop = () => {
    clearInterval(timer.current)
  };

  const reset = () => {
    clearInterval(timer.current)
    setCount(0);

  };

  return (
    <>
      <h2> Count : {count} </h2>
      <button onClick={start}>start</button>

      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default StopWatch;

// import React, { useState } from "react";
// import { useRef } from "react";

// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [mili, setMili] = useState(0);
//   const timeref = useRef();
//   const miliref = useRef();
//   const start = () => {
//     timeref.current = setInterval(() => {
//       setTime((t) => t + 1);
//     }, 1000);
//     miliref.current = setInterval(() => {
//       setMili((t) =>{
//         return t>59?0: t + 1});
//     }, 10);
//   };
//   const stop = () => {
//     clearInterval(timeref.current);    //3600000
//     clearInterval(miliref.current);
//   };
//   const reset = () => {
//     clearInterval(timeref.current);
//     clearInterval(miliref.current);
//     setTime(0);
//     setMili(0);
//   };
//   return (
//     <>
//       <h1>
//         <p>sec : {time}</p>
//         <p>mili :{mili}</p>
//       </h1>
//       <button onClick={start}>start</button>
//       <button onClick={stop}>stop</button>
//       <button onClick={reset}>reset</button>
//     </>
//   );
// };

// export default StopWatch;
