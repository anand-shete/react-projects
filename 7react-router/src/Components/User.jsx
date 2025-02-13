import React from "react";
import { useParams } from "react-router";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="p-4 bg-orange-300 text-center text-3xl">
      <h1>Taking parameters from a URL: {userId} </h1>
    </div>
  );
}
