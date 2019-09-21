import React from 'react';

export const Button = ({
  type = 'none',
  onclick,
  className,
  children
}) => (
  <button
    className={className}
    type={type}
    onClick={onclick}
  >
    {children}
  </button>
);
