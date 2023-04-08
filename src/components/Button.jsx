import React from "react";

export default function Button({ type, className, buttonText, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}
