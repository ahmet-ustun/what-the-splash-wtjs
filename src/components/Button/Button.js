import React from 'react';

import './styles.css';

export const Button = ({ children, isLoading, ...props }) => (
  <button className="button" disabled={isLoading} {...props}>
    {isLoading ? 'Loading...' : children}
  </button>
);

Button.defaultProps = {
  isLoading: false,
};
