import React, { useEffect } from "react";

export default function InputBox({
  className,
  currencyOptions,
  from,
  setFrom,
  setTo,
  amount,
  setAmount,
  setConvertedAmount,
  currencyObject,
  convertedAmount,
}) {
  return (
    <div className={`${className}`}>
      <div className="py-5 px-20 bg-white rounded-2xl">
        <label htmlFor="currencyOptions">From</label>
        <select
          name="currencyOptions"
          id="currencyOptions"
          className="mx-10"
          defaultValue={currencyOptions[292]}
          onChange={(e) => setFrom(e.target?.value)}
        >
          {currencyOptions.map((countryCode) => (
            <option key={countryCode} value={countryCode}>
              {countryCode}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="from"
          id="from"
          value={amount}
          placeholder="Amount"
          className="h-10 text-center"
          onChange={(e) => {
            setAmount(Number(e.target?.value));
            setConvertedAmount(amount * currencyObject[from]);
          }}
        />
      </div>

      {useEffect(() => {
        // console.log(from);
        // console.log(currencyOptions[from]);
        // console.log(currencyObject[from]);
        // console.log(amount * currencyOptions[from]);
      }, [amount])}

      <div className="py-5 px-20 bg-white rounded-2xl">
        <label htmlFor="currencyOptions">From</label>
        <select
          name="currencyOptions"
          id="currencyOptions"
          className="mx-10"
          defaultValue={currencyOptions[5]}
          onChange={(e) => setTo(e.target?.value)}
        >
          {currencyOptions.map((countryCode) => (
            <option
              key={countryCode}
              value={countryCode}
              defaultValue={currencyOptions[5]}
            >
              {countryCode}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="to"
          id="to"
          placeholder="Amount"
          className="h-10 text-center"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 px-20 py-3 rounded-2xl cursor-pointer"
      >
        Convert
      </button>
    </div>
  );
}
