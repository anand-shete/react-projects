import { useState } from "react";
import "./App.css";

function App() {
  const [bgCol, setBgCol] = useState("white");

  // We can directly pass the function reference onClick={setBgCol} iff the function triggered from event does not require arguments.
  // If the function to be executed(setBgCol) requires arguments we need to ensure the function runs only when the event is triggered, so we need to pass a reference to the function, not the result of calling it. This is why we use a callback function.
  return (
    <>
      {/* Assume the outermost div as Body */}
      <div className="w-screen h-screen flex flex-row justify-center items-center transition-all ease duration-500"
        style={{ backgroundColor: bgCol }}>
        <div className="border rounded-full p-5">
          <button className="bg-blue-700 px-3 py-2 my rounded-3xl cursor-pointer mr-3 text-white"
            onClick={() => setBgCol("blue")}>
            Blue
          </button>
          <button className="bg-red-700 px-3 py-2 my rounded-3xl cursor-pointer mx-3 text-white"
            onClick={() => setBgCol("red")}>
            Red
          </button>
          <button className="bg-green-700 px-3 py-2 my rounded-3xl cursor-pointer mx-3 text-white"
            onClick={() => setBgCol("green")}>
            Green
          </button>
          <button className="bg-yellow-300 px-3 py-2 my rounded-3xl cursor-pointer mx-3"
            onClick={() => setBgCol("yellow")}>
            Yellow
          </button>
          <button className="bg-black px-3 py-2 my rounded-3xl text-white cursor-pointer mx-3"
            onClick={() => setBgCol("black")}>
            Black
          </button>
          <button className="bg-white px-3 py-2 my rounded-3xl border cursor-pointer mx-3"
            onClick={() => setBgCol("white")}>
            White
          </button>
          <button className="bg-cyan-400 px-3 py-2 my rounded-3xl cursor-pointer ml-3"
            onClick={() => setBgCol("cyan")}>
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
