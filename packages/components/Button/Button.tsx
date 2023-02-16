import React, { FC } from 'react';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ size = 'md', label, ...props }) => {
  return (
    <button type="button" className="bg-slate-400" {...props}>
      {label}
    </button>
  );
};
