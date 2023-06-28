import React, { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data, "data");
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
