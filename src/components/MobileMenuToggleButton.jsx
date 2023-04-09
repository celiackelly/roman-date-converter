import React from "react";

export default function MobileMenuToggleButton({
  className,
  handleToggleMobile,
}) {
  return (
    <button className={className} onClick={handleToggleMobile}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="8" rx="8"></rect>
        <rect y="30" width="100" height="8" rx="8"></rect>
        <rect y="60" width="100" height="8" rx="8"></rect>
      </svg>
    </button>
  );
}
