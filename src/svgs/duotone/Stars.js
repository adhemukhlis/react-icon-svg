import * as React from "react";

function SvgStars(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M362.69 53.3L336 0l-26.7 53.3L256 80l53.3 26.7L336 160l26.7-53.3L416 80zM480 192l-16-32-16 32-32 16 32 16 16 32 16-32 32-16z"
        opacity={0.4}
      />
      <path
        d="M377.09 306.5l-75.9 74 17.9 104.6a23 23 0 01-33.3 24.2L192 459.9l-93.8 49.4c-16.6 8.9-36.5-5.3-33.3-24.2l18-104.6-75.9-74C-6.7 293.2.9 270 19.7 267.3L124.49 252l46.9-95.2c8.5-17.2 32.8-17 41.2 0l46.9 95.2 104.8 15.3c18.8 2.7 26.4 25.9 12.8 39.2z"
        className="stars_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStars;