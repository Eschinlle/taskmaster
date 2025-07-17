"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Todo List</h1>
      <div className="flex items-center mb-4">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="mr-2"
        />
        <Button onClick={addTodo} className="bg-blue-500 text-white">
          Add
        </Button>
      </div>
      <div className="mb-4">
        <span className="text-blue-600">Total Todos: {todos.length}</span>
      </div>
      {todos.map((todo) => (
        <Card key={todo.id} className="mb-2 p-2 flex justify-between items-center">
          <input
            type="text"
            value={todo.text}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
            className="flex-grow mr-2"
          />
          <Button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white"
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
}