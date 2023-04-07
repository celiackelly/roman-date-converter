import React from "react";

export default function CardSection({ title, className, children }) {
  return (
    <section className={className + " card"}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
