import React from 'react';
import { CustomDropdown } from '../CustomDropdown';
import { socialLinks } from './constants.tsx';

import './style.css';

type LinkItemProps = {
  index: number;
  platform: string;
  link: string;
  onRemove: () => void;
  onPlatformChange: (value: string) => void;
  onLinkChange: (value: string) => void;
};

export const LinkItem: React.FC<LinkItemProps> = ({
  index = 0,
  platform,
  link,
  onRemove,
  onPlatformChange,
  onLinkChange,
}) => {
  return (
    <div className="link-item">
      <div className="link-item-header">
        <h4 className="link-title">Link #{index + 1}</h4>
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="input-group">
        <label>Platform</label>
        <CustomDropdown
          value={platform}
          onChange={onPlatformChange}
          options={socialLinks}
        />
      </div>
      <div className="input-group">
        <label>Link</label>
        <input
          required
          type="text"
          value={link}
          onChange={(e) => onLinkChange(e.target.value)}
        />
      </div>
    </div>
  );
};
