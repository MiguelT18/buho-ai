import React from "react";

export default function SearchIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path
          fill="currentColor"
          fillOpacity={0.3}
          d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"
        ></path>
        <path d="M10.5 13.5l-7.5 7.5"></path>
      </g>
    </svg>
  );
}
