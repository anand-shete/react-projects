import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useContent usage
  const { setUser } = useContext(UserContext);

  const submitForm = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
        />
        <button
          type="submit"
          onClick={submitForm}
          className="bg-green-400 border cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
