// import React, { useState } from "react";

// const CounterApp = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick1 = () => {
//     setCounter(counter + 1);
//   };

//   const handleClick2 = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <h1 style={{ color: counter > 0 ? "green" : "red" }}>{counter}</h1>

//       <button onClick={handleClick1} className="color:green">
//         Increase
//       </button>
//       <button onClick={handleClick2}>
//         Decrease
//       </button>
//     </div>
//   );
// };

// export default CounterApp;

import React, { useState } from "react";

const CounterApp = () => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(count + 1);
  };

  const decrs = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert(`reached the limit`);
    }
  };

  const likes = () => {
    setLike(like + 1);
  };

  const dislikes = () => {
    setDisLike(disLike + 1);
  };

  return (
    <>
      <h2 style={{ color: count > 0 ? "green" : "red" }}>count : {count}</h2>

      <button onClick={incre}> Increase </button>
      <button onClick={decrs}>Decrease </button>
      <hr />
      <button onClick={likes}> Like {like} </button>
      <button onClick={dislikes}>Dislike {disLike} </button>
    </>
  );
};

export default CounterApp;
