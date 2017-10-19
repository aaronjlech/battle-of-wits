import React from 'react';



const Button = (props) => {
  const { onClick, label, className, type} = props;
  return (
    <button
      type={type || ''}
      className={`button ${className || ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
export default Button;
