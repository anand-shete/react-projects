import './App.css'
import Card from './components/Card'



export default function App() {
  // Curly braces {} are used to evaluate any JavaScript expression. Inside the braces, you can pass variables, functions, objects, or any valid JavaScript expression that evaluates to a value.
  // When you pass a value directly inside double quotes " ", React treats it as a literal string. This is equivalent to hardcoding the value, and React doesn't interpret it as a JavaScript expression.

  const myObj = {
    name: "Superman",
    age: 405
  };
  const myArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 mb-4 text-black rounded-md p-2'>React Props</h1>
      <Card name={"Alan Wesker"} customObject={myObj} />    {/* name is treated as JS expression */}
      <Card name="Dexter Morgan" customArray={myArr} />     {/* name is treated as hard-coded value */}
      <Card />
    </>
  )
}