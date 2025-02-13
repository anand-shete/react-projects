import { useEffect } from "react";

export default function InputBox({
  label = "",
  currencyOptions = [],
  className = "",
  amount = "",
  onAmountChange,
  onOptionChange,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5 border rounded-md text-center"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          type="number"
          placeholder="Amount"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => onOptionChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              defaultValue={currencyOptions[292]}
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
