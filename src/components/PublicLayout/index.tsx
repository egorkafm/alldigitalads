import React, { CSSProperties, ReactNode } from 'react';
import { Header } from '../Header';

import './style.css';

interface PublicLayoutProps {
  children: ReactNode;
  customHeader?: ReactNode;
  styleHeader?: CSSProperties;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({
  children,
  customHeader,
  styleHeader,
}) => {
  return (
    <div className="layout">
      <Header customHeader={customHeader} style={styleHeader} />
      <main>{children}</main>
    </div>
  );
};
