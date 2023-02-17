import { FC } from 'react';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ size = 'md', label, onClick = () => {}, ...props }) => (
  <button type="button" className={`bg-red-400 ${size}`} {...props} onClick={() => onClick?.()}>
    {label}
  </button>
);
