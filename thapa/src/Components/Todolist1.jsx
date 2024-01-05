import React, { useState } from "react";

const Todolist1 = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (e) => {
    e.preventDefault();
    setItems([...items, data]);
    setData("");
  };

  const deleteItem = (index) => {
    const newTodos = items.filter((elem, i) => {
      return i !== index;
    });
    setItems(newTodos);
  };

  // remove All

  const removeAll =()=>{
    setItems([]);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        style={{ width: "200px" }}
        onChange={(e) => setData(e.target.value)}
        value={data}
      />

      <button onClick={inputEvent}> Add task </button>
      <ol>
        {items.map((value, index) => {
          return (
            <li key={index}>
              {value} <br />
              <button onClick={() => deleteItem(index)}> Delete Item</button>
            </li>
          );
        })}
      </ol>
      <button onClick={removeAll} >Remove All</button>
    </>
  );
};

export default Todolist1;
