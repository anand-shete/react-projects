import { useState, useRef } from "react";
import { useTodo } from "../contexts";

export default function TodoItem({ todo }) {

  const [isEditable, setIsEditable] = useState(false); // for pencil icon
  const [todoText, setTodoText] = useState(todo.todo); // for updating todo input field
  const inputRef = useRef(null);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoText });
    setIsEditable(false);
  };
  const toggleCompletedFunc = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        name="completed"
        id="completed"
        className="cursor-pointer"
        checked={todo.completed}        // similar to value in input field
        onChange={toggleCompletedFunc}
      />
      {/* Input field for individual Todo */}
      <input
        type="text"
        name="task"
        id="task"
        className={`outline-none w-full bg-transparent rounded-lg
          ${isEditable ? " border-black/10" : ""} 
          ${todo.completed ? "line-through" : ""}`}
        value={todoText}
        ref={inputRef}
        onChange={(e) => setTodoText(e.target.value)}
        readOnly={!isEditable}
      />
      {/* ✏️ and 📁 Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) editTodo();
          else {
            setIsEditable((prev) => !prev);
            inputRef.current?.focus();
          }
        }}
        disabled={todo.completed}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* ❌ Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}
