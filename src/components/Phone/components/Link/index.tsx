import React from 'react';
import GitHubIcon from '../../../../assets/icons/github.svg?react';
import YouTubeIcon from '../../../../assets/icons/youtube.svg?react';
import LinkedInIcon from '../../../../assets/icons/linkedIn.svg?react';
import ArrowIcon from '../../../../assets/icons/arrow.svg?react';

import './style.css';

type LinkProps = {
  variant: string;
  href: string;
};

const variantStyles: Record<
  string,
  { label: string; backgroundColor: string; icon: React.ReactNode }
> = {
  GitHub: {
    label: 'GitHub',
    backgroundColor: '#191919',
    icon: <GitHubIcon />,
  },
  YouTube: {
    label: 'YouTube',
    backgroundColor: '#EF383A',
    icon: <YouTubeIcon />,
  },
  LinkedIn: {
    label: 'LinkedIn',
    backgroundColor: '#2D69FF',
    icon: <LinkedInIcon />,
  },
};

export const Link: React.FC<LinkProps> = ({ variant, href }) => {
  const style = variantStyles[variant];

  if (!style) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-component"
      style={{ backgroundColor: style.backgroundColor }}
    >
      <div className="label-group">
        <div className="link-icon">{style.icon}</div>
        <span className="link-label">{style.label}</span>
      </div>
      <div className="link-arrow">
        <ArrowIcon />
      </div>
    </a>
  );
};
