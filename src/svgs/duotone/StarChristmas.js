import * as React from "react";

function SvgStarChristmas(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M359.15 334.15l-19.9 5-5 19.9 68.8 55.1c7.5 6 17.2-3.7 11.2-11.2zm-206.2 0L98 403c-6 7.5 3.7 17.2 11.2 11.2l68.8-55.1-5-19.9zM359.15 178l55.1-68.8c6-7.5-3.7-17.2-11.2-11.2l-68.8 55 5 19.9zM153 178l19.9-5 5-19.9L109.05 98c-7.5-6-17.2 3.7-11.2 11.2z"
        opacity={0.4}
      />
      <path
        d="M505.25 264.65l-192.6 48.1-48.1 192.5c-2.2 9-15 9-17.2 0l-48.1-192.5-192.5-48.1c-9-2.2-9-15 0-17.2l192.6-48.1 48.1-192.6c2.2-9 15-9 17.2 0l48.2 192.6 192.5 48.1c8.9 2.2 8.9 15-.1 17.2z"
        className="star-christmas_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgStarChristmas;