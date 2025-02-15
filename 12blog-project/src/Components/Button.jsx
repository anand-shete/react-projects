import React from "react";

export default function Button({
  children, // 'children' is necessary
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
