import { useTodo } from "../contexts";
import { useState } from "react";

export default function TodoForm() {
  const [todo, setTodo] = useState(""); // for a single todo

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo(""); // clear the input field after adding a todo
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        id="writeTodo"
        name="writeTodo"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}
