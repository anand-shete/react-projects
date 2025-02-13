import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state to track updated text
  // const [editedTodos, setEditedTodos] = useState(
  //   todos.reduce((acc, todo) => ({ ...acc, [todo.id]: todo.text }), {})
  // );

  return (
    <div>
      <h1>Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>
            {/* <button
              onClick={() =>
                dispatch(
                  updateTodo({ id: todo.id, text: editedTodos[todo.id] })
                )
              }
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md cursor-pointer"
            >
              Update
            </button> */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
