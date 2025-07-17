"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Todo List</h2>
      <div className="flex items-center mb-4">
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="mr-2"
        />
        <Button onClick={addTask} className="bg-blue-500 text-white">
          Add
        </Button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="text-blue-700">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}