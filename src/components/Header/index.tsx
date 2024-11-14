import React, { CSSProperties, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import LinkIcon from '../../assets/icons/link.svg?react';
import ProfileIcon from '../../assets/icons/profile.svg?react';
import LogoIcon from '../../assets/icons/logo.svg?react';
import PreviewIcon from '../../assets/icons/preview.svg?react';
import { Paper } from '../Paper';

import './style.css';

interface HeaderProps {
  customHeader?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Header: React.FC<HeaderProps> = ({
  customHeader,
  className = '',
  style,
}) => {
  return (
    <Paper style={{ margin: '1rem', ...style }}>
      <header className={`header ${className}`}>
        {customHeader ? (
          customHeader
        ) : (
          <>
            <div className="logo">
              <LogoIcon />
              <span className="logo-text">devlinks</span>
            </div>
            <nav className="nav">
              <NavLink
                to="/links"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <LinkIcon />
                <span className="link-text">Links</span>
              </NavLink>
              <NavLink
                to="/profile-details"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <ProfileIcon />
                <span className="link-text">Profile Details</span>
              </NavLink>
            </nav>
            <NavLink to="/preview" className="nav-link preview-button">
              <PreviewIcon className="preview-icon" />
              <span className="link-text">Preview</span>
            </NavLink>
          </>
        )}
      </header>
    </Paper>
  );
};
