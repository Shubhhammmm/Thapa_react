import React, { useState } from "react";
import "./ToDoList.css";
import TodoListC from "./TodoListC";

const ToDoList = () => {
  const [inputItem, setInputItem] = useState(" ");
  const [item, setItem] = useState([]);

  const itemEvent = (e) => {
    setInputItem(e.target.value);
  };

  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputItem];
    });
    setInputItem(" ");
  };

  const deleteItems =(id) =>{
    console.log("deleted");

    setItem((oldItems)=>{
        return oldItems.filter((arrElem , index)=>{
            return index !== id;

        })
    })
      
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDoList</h1>
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputItem}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputItem} </li> */}
            {item.map((itemVal , i) => {
             return  <TodoListC 
               key = {i}
               id = {i}
               text ={itemVal}
               onSelect = {deleteItems}
               />;
             
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
