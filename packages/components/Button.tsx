import { FC } from 'react';
import cx from 'classnames';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, size = 'sm' }) => {
  return <button className={cx()}>{label}</button>;
};
