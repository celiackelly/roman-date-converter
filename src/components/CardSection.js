import React from 'react'

export default function CardSection( {title, children} ) {
  return (
    <section className="card">
        <h2>{title}</h2>
        {children}
    </section>
  )
}
