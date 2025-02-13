import { useState, useEffect } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyAPI from "./hooks/useCurrencyAPI";

export default function App() {
  // states to update currency code
  const [from, setFrom] = useState("1inch");
  const [to, setTo] = useState("1inch");

  // states to update amount fields
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  // fetching the currency options for the select fields
  const currencyObject = useCurrencyAPI(from);
  const currencyOptions = Object.keys(currencyObject);

  // function to setConvertedAmount
  const convert = () => {
    setConvertedAmount(amount * currencyObject[to]);
    // console.log("convertedAmount", convertedAmount);      // React does not update the state immediately. It batches state updates and re-renders the component after the update is processed, we wont see the changes to a state immediately. we will have to use useEffect hook with given state as dependency
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  /*const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom); // Swap currency codes
      return to; // Return new 'from' value
    });

    setAmount((prevAmount) => {
      setConvertedAmount(prevAmount); // Swap amounts
      return convertedAmount; // Return new amount value
    });
  };*/
  
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center 
      bg-[url('./bg.jpg')] bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From InputBox */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={currencyOptions}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)} // Updates the variable 'amount' state when InputBox triggers onAmountChange.
                onOptionChange={(option) => setFrom(option)}
              />
            </div>

            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* To InputBox */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyOptions={currencyOptions}
                amount={convertedAmount}
                onOptionChange={(option) => setTo(option)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
