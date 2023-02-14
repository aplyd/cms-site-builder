import { FC } from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, size = 'sm' }) => {
  return <button>{label}</button>;
};
