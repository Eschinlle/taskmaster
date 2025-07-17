"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Todo List</h1>
      <div className="flex mb-4">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="mr-2"
        />
        <Button onClick={addTodo} className="bg-blue-500 text-white">
          {editIndex !== null ? "Update" : "Add"}
        </Button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 shadow rounded"
          >
            <span>{todo}</span>
            <div>
              <Button
                onClick={() => editTodo(index)}
                className="bg-blue-300 text-white mr-2"
              >
                Edit
              </Button>
              <Button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-blue-600 mt-4">
        Total Items: {todos.length}
      </div>
    </div>
  );
}