import { useState } from 'react'
import './App.css'

function App() {
  // useState Hook used to add state to functional component
  const [counter, setCounter] = useState(1);
  // counter: The current state value. Initially, it holds the value passed to useState.
  // setCounter: A function to update the state. Calling setCounter(newValue) updates counter to newValue and re-renders the component with the new state.
  // 1: The initial state value


  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }
  // State updates in React are asynchronous and batched. React batches multiple state updates for performance optimization, especially within the same event handler, and it does not update the state immediately. Instead, updates are scheduled, and the state value does not change until the next render. Since React batches state updates, all three setCounter calls are batched together and effectively treated as single function

  // To ensure that each setCounter call uses the latest updated state, we can pass a function updater to setCounter. The function updater receives the most recent state value as an argument, ensuring accurate updates.
  const addValue2 = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const resetValue = () => {
    setCounter(1)
  }
  const decValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Simple Counter App: {counter} </h1>
      <button onClick={addValue}>Add Counter: {counter} </button>
      <button onClick={decValue}>Decrement </button>
      <button onClick={resetValue}>Reset Counter</button>
      <footer> Another place: {counter}</footer>
    </>
  )
}

export default App
