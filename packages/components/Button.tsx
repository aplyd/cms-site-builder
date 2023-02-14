import { FC } from 'react';
import cx from 'classnames';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, size = 'sm' }) => {
  return <button className="p-4 text-white bg-black rounded-md">{label}</button>;
};
