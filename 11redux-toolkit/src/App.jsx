import AddTodo from "./components/TodoForm";
import Todos from "./components/Todos";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Redux-Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}
