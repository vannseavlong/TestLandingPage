import React from 'react';
import './button.css';

const Button = ({ 
  text, 
  onClick, 
  href,
  target = '_self',
  disabled = false,
  className = '',
  ...props 
}) => {
  // If href is provided, render as a link
  if (href) {
    return (
      <a 
        href={href}
        target={target}
        className={`simple-button ${className}`}
        lang={props.lang}
        {...props}
      >
        <span className="simple-button__text">{text}</span>
        <span className="simple-button__arrow">
          <img src="/arrow.png" alt="arrow" />
        </span>
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button 
      className={`simple-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      lang={props.lang}
      {...props}
    >
      <span className="simple-button__text">{text}</span>
      <span className="simple-button__arrow">
        <img src="/arrow.png" alt="arrow" />
      </span>
    </button>
  );
};

export default Button;