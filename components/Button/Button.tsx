import React, { FC } from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ size = 'md', label, ...props }) => (
  <button type="button" {...props} className={size}>
    {label}
  </button>
);

export default Button;
