import React, { useState } from "react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState();
  const [todoList, setTodoList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem("");
  };

  const onInput = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter your Task"
            value={todoItem}
            onChange={onInput}
          />
          <button onClick={addTask}> Add task </button>
        </form>
        <ol>
          {todoList.map((value, index) => {
            return <li  > {value} </li>;
          })}
        </ol>
      </div>
    </>
  );
};

export default TodoList;
