import { CSSProperties, FC, ReactNode } from 'react';
import './style.css';

type ButtonVariant = 'bg' | 'outline' | 'text';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'bg',
  children,
  onClick,
  style,
  disabled,
}) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
