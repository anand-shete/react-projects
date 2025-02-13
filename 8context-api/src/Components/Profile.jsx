import React, { useContext } from "react";
import userContext from "../context/userContext";

export default function Profile() {
  const { user } = useContext(userContext);
  if (!user) return <div className="absolute">Enter details!</div>;

  return (
    <div>
      <h1>Welcome, {user.username} </h1>
    </div>
  );
}
