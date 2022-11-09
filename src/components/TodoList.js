import React, { useState } from "react";
import TodoForm from "./TodoForm";
import To from "./To";
import StarterList from "./StarterList";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>AS Degree in CNIT</h1>
      <TodoForm onSubmit={addTodo} />
      <To
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      <StarterList />
    </>
  );
}

export default TodoList;
