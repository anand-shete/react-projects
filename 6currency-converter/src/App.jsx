import React from "react";
import { useState, useEffect } from "react";
import useCurrencyAPI from "./hooks/useCurrencyAPI";
import InputBox from "./components/InputBox";

export default function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // const [currencyOptions, setCurrencyOptions] = useState({});
  // setCurrencyOptions(useCurrencyAPI("usd"));
  // useState Updates Trigger a Re-render. Calling setCurrencyOptions updates the state. When state updates, the component re-renders. useCurrencyAPI("usd") Runs on Every Render
  // useCurrencyAPI is a custom hook, meaning it runs every time the component renders. Since useCurrencyAPI fetches data and updates state, it returns new data on every render. The new data triggers setCurrencyOptions, causing another re-render. This creates an infinite loop of re-renders.

  // Now, we can use useEffect Hook with empty dependency array [] to render a component only once
  // useEffect(() => {
  //   setCurrencyOptions(useCurrencyAPI("usd"));
  // }, []);
  // But, Hooks (like useCurrencyAPI) must be called inside the component body, not inside useEffect or any other function. We cannot call hooks conditionally, inside loops, or nested inside other functions.

  const currencyObject = useCurrencyAPI("usd");
  const currencyOptions = Object.keys(currencyObject);

  const convert = () => {
    // console.log("amount", amount);
    // console.log("from", from);
    // console.log("to", to);
    // console.log("multiplier", currencyObject[to]);
    // console.log(amount * currencyObject[to]);

    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
    >
      <div className=" w-screen h-screen flex justify-center items-center  bg-[url('./bg.jpg')] bg-no-repeat bg-center bg-cover">
        {/* adding a black background Overlay */}
        <div className="absolute w-screen h-screen bg-black opacity-50"></div>

        <InputBox
          className="z-1 bg-blue-200 h-1/2 w-1/2 rounded-2xl flex flex-col justify-evenly  items-center"
          currencyOptions={currencyOptions}
          from={from}
          setFrom={(from) => setFrom(from)}
          setTo={(to) => setTo(to)}
          amount={amount}
          setAmount={(amount) => setAmount(amount)}
          setConvertedAmount={(amount) => setConvertedAmount(amount)}
          currencyObject={currencyObject}
          convertedAmount={convertedAmount}
        />
      </div>
    </form>
  );
}
