import React, { useState } from "react";
import Todolist22 from "./Todolist22.";

const Todolist2 = () => {
  const [item, setItem] = useState(" ");
  const [Newitem, setNewItem] = useState([]);

 

  const itemEvent = (e) => {
    setItem(e.target.value);
  };

  const updateItem = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };


  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Your Todo"
        onChange={itemEvent}
        value={item}
      />
      <button onClick={updateItem}>Add Task</button>
      <ol>
        {Newitem.map((val, index) => {
          return <Todolist22 key={index} text={val}
         />;
        })}
      </ol>
    </>
  );
};

export default Todolist2;
