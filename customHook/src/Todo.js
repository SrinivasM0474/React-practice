import React, { useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      text: "Todo app",
    },
  ]);

  const inputRef = useRef();

  const addTodo = () => {
    if (!inputRef.current.value) return;
    const newTodos = [...todos, { text: inputRef.current.value }];
    setTodos(newTodos);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  const todoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={addTodo}>Add</button>

      {todos.map((item, index) => {
        return (
          <div style={todoStyle} key={index}>
            <p>{item.text}</p>
            {todos.length > 1 && (
              <span
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                X
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
