import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state to track input changes
  const [editedTodos, setEditedTodos] = useState({});
  // Update editedTodos whenever todos change (e.g., new todo added)
  useEffect(() => {
    setEditedTodos(
      todos.reduce((acc, todo) => ({ ...acc, [todo.id]: todo.text }), {})
    );
  }, [todos]); // Runs every time `todos` updates

  // Handle input change
  const handleChange = (id, newText) => {
    setEditedTodos((prev) => ({
      ...prev,
      [id]: newText,
    }));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between bg-zinc-800 px-4 py-2 rounded"
          >
            <input
              type="text"
              className="text-white w-3/4 hover:bg-zinc-600 outline-none rounded-md"
              value={editedTodos[todo.id] ? editedTodos[todo.id] : ""}
              onChange={(e) => handleChange(todo.id, e.target.value)}
            />
            {/* <div className="text-white">{todo.text}</div> */}
            <div className="flex w-1/6 justify-between">
              <button
                onClick={() =>
                  dispatch(
                    updateTodo({ id: todo.id, text: editedTodos[todo.id] })
                  )
                }
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md cursor-pointer self-end"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
