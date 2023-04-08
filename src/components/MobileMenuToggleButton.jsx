import React from "react";

export default function MobileMenuToggleButton({
  className,
  handleToggleMobile,
}) {
  return (
    <svg
      className={className}
      role="button"
      onClick={handleToggleMobile}
      tabIndex="0"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10" rx="8"></rect>
      <rect y="30" width="100" height="10" rx="8"></rect>
      <rect y="60" width="100" height="10" rx="8"></rect>
    </svg>
  );
}
