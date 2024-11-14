import React, { CSSProperties, ReactNode } from 'react';

import './style.css';

interface PaperProps {
  children?: ReactNode;
  className?: string;
  borderRadius?: string;
  backgroundColor?: string;
  style?: CSSProperties;
}

export const Paper: React.FC<PaperProps> = ({
  children,
  className = '',
  borderRadius = '1rem',
  backgroundColor = '#ffffff',
  style,
  ...props
}) => {
  return (
    <div
      className={`paper ${className}`}
      style={{ borderRadius, backgroundColor, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
