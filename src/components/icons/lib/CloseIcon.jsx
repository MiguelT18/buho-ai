import React from "react";

export default function CloseIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <mask id="lineMdCloseCircleFilled0">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        >
          <path
            fill="#fff"
            d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
          ></path>
          <path
            stroke="#000"
            d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
          ></path>
        </g>
      </mask>
      <rect
        width={24}
        height={24}
        fill="currentColor"
        mask="url(#lineMdCloseCircleFilled0)"
      ></rect>
    </svg>
  );
}
