import React from "react";

export default function SunRisingIcon({ ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.6s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.8s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
      <mask id="lineMdMoonFilledAltToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
          <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
          <animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" />
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
          <animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
          <animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        mask="url(#lineMdMoonFilledAltToSunnyFilledLoopTransition0)"
        fill="#000"
      >
        <animate fill="freeze" attributeName="r" dur="0.4s" values="10;6" />
      </circle>
    </svg>
  );
}
