import * as React from "react";

function SvgMountains(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M611.14 448h-69.72L357.48 159.68l32.84-50.37c11.57-17.75 39.8-17.75 51.37 0l194 297.6c11.77 18-2.05 41.09-24.55 41.09z"
        opacity={0.4}
      />
      <path
        d="M338.33 189.07L503.5 448H30.92C6.81 448-8 422.81 4.58 403.18l207.9-324.66c12.4-19.36 42.64-19.36 55 0z"
        className="mountains_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMountains;