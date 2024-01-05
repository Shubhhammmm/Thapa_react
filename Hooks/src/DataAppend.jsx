import React, { useState } from "react";

const DataAppend = () => {
  const data = [
    {
      id: 1,
      name: "Shubham",
      age: 25,
    },
    {
      id: 2,
      name: "Shubh",
      age: 24,
    },
  ];

  //   data.sort((a,b)=> a.age  - b.age )
  const [myArray, setMyArray] = useState(data);

  const clearData = () => {
    setMyArray([]);
  };

  return (
    <>
      {myArray.map((currElem, i) => (
        <ol key={i}>
          {" "}
          <li>
            {" "}
            {currElem.id} {currElem.name}{" "}
          </li>{" "}
        </ol>
      ))}
      <button onClick={clearData}>Clear</button>
    </>
  );
};

export default DataAppend;
