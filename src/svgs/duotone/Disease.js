import * as React from "react";

function SvgDisease(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M472.27 196l-67.06-23c-19.28-6.6-33.54-20.92-38.14-38.31l-16-60.45c-11.58-43.77-76.57-57.13-110-22.62L195 99.29c-13.26 13.71-33.54 20.93-54.2 19.31L68.88 113c-52-4.07-86.93 44.89-59 82.84l38.54 52.42c11.08 15.07 12.82 33.86 4.64 50.24l-28.43 57C4 396.72 47.44 440.34 98.09 429.28l70-15.28c20.11-4.39 41.45 0 57.07 11.73l54.32 40.83c39.32 29.56 101 7.57 104.45-37.22l4.7-61.86c1.35-17.8 12.8-33.87 30.63-43l62-31.74c44.84-22.96 39.55-80.17-8.99-96.74zM160 256.05a32 32 0 1132-32 32 32 0 01-32 32zm128 96a32 32 0 1132-32 32 32 0 01-32 32zm16-128a16 16 0 1116-16 16 16 0 01-16 16z"
        opacity={0.4}
      />
      <path
        d="M304 224.05a16 16 0 10-16-16 16 16 0 0016 16zm-16 64a32 32 0 1032 32 32 32 0 00-32-32z"
        className="disease_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDisease;