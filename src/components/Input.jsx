import React from "react";

export default function Input({ placeholder, type, props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-transparent border dark:border-light-gray border-light-gray/15 text-black dark:text-white"
      {...props}
    />
  );
}
