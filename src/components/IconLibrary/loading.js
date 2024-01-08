import React from 'react'
export const Loading = ({ w, h }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w || '16'}
      height={h || '16'}
      viewBox="0 0 24 24"
    >
      <g stroke="white">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke-linecap="round"
          stroke-width="3"
        >
          <animate
            attributeName="stroke-dasharray"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0 150;42 150;42 150;42 150"
          />
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0;-16;-59;-59"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="2s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  )
}
