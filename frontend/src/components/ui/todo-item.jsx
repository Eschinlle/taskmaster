"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b border-blue-200">
      {isEditing ? (
        <Input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 mr-2"
        />
      ) : (
        <span className="text-blue-500">{todo.text}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <Button onClick={handleUpdate} className="bg-blue-500 text-white">
            Save
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white">
            Edit
          </Button>
        )}
        <Button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white">
          Delete
        </Button>
      </div>
    </div>
  );
}