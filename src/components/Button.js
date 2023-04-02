import React from 'react'

export default function Button({ type, buttonText, onClick }) {
  return (
    <button 
        type={type} 
        onClick={onClick}>
        {buttonText}
    </button>
  )
}
