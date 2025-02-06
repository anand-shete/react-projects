import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [allowSpecialChar, setAllowSpecialChar] = useState(false);
  const [allowNumber, setAllowNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);

  // useRef 
  const passwordRef = useRef(null);
  const copyButton = useRef("x");
  // Normally, useRef(null) creates an object { current: null } that React can later update with a DOM element reference. However, useRef("x") initializes the current property with "x", so copyButton.current will initially be "x" instead of a null reference. If we try to attach copyButton to a <button> using ref={copyButton}, React expects a mutable object ({ current: someElement }). Since copyButton.current is "x", React won’t overwrite the "x" value, and the ref won’t actually point to the button.

  // useCallback ensures the function is re-rendered only when dependencies change
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowSpecialChar) str += "~!@#$%^&*()_-`";
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.at(charIndex);
    }

    setPassword(pass);
  }, [allowSpecialChar, allowNumber, length]);

  // useEffect used to execute code when any variable in dependency array is changed
  useEffect(() => {
    passwordGenerator();
  }, [allowSpecialChar, allowNumber, length]);


  const copyBtn = async () => {
    // In React.js final code is compiled on client-side, so window object is browser window, in Next.js this browser object won't be available
    // await window.navigator.clipboard.writeText(password);
    // const copyBtn = document.querySelector('button');
    // copyBtn.innerText = "Copied!";

    // using the reference
    await window.navigator.clipboard.writeText(passwordRef.current?.value)
    copyButton.current.innerText = "Copied!";
    // console.log(copyButton.current);         // always used while using useRef
    
    setTimeout(() => {
      // copyBtn.innerText = "Copy";
      copyButton.current.innerText = "Copy";
    }, 2000)
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Password Generator</h1>

      <div className="border rounded-xl text-center flex flex-col justify-center items-center w-1/2 h-[200px] bg-blue-800 ">
        <div className="">
          <input
            type="text" id="password" name="password"
            width={"500px"}
            className="bg-white w-[500px] py-[7px] rounded-l-2xl outline-0 text-center"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            type="button"
            ref={copyButton}
            className="py-[7px] px-4 rounded-r-2xl bg-blue-500 cursor-pointer hover:bg-blue-400"
            onClick={copyBtn}
          >
            Copy
          </button>
        </div>

        <div className="flex justify-between  text-white mt-6">
          <div className="flex items-around">
            <label htmlFor="range">Length: {length}</label>
            <input
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              type="range"
              id="range"
              onChange={(x) => {
                setLength(Number(x.target.value));
              }}
            />
          </div>
          <div className="mx-10">
            <input
              className="border"
              type="checkbox"
              id="allowNumber"
              value={allowNumber}
              onChange={(event) => {
                setAllowNumber(event.target.checked);
              }}
            />
            <label className="cursor-pointer" htmlFor="allowNumber">
              Number
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              id="character"
              onChange={(e) => {
                setAllowSpecialChar(e.target.checked);
              }}
            />
            <label className="cursor-pointer" htmlFor="character">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
