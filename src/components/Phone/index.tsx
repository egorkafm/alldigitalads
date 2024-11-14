import React, { CSSProperties } from 'react';
import { Paper } from '../Paper';
import { Link } from './components/Link';
import { useStore } from '../../context/StoreContext.tsx';

import './style.css';

type PhoneProps = {
  styleType?: 'phone' | 'color';
  backgroundColor?: string;
  hideOnMobile?: boolean;
  style?: CSSProperties;
};

export const Phone: React.FC<PhoneProps> = ({
  styleType = 'phone',
  backgroundColor = '#FFFFFF',
  hideOnMobile = true,
  style,
}) => {
  const { links, profile } = useStore();

  return (
    <Paper
      className={`phoneWrapper ${hideOnMobile ? 'hideOnMobile' : ''}`}
      style={style}
    >
      <div
        className={`phoneContent ${styleType === 'phone' ? 'phoneBackground' : 'colorBackground'}`}
        style={styleType === 'color' ? { backgroundColor } : {}}
      >
        <div className="phoneScreen">
          {profile.firstName || profile.lastName || profile.profileImage ? (
            <>
              <div className="profileImageWrapper">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt="Profile"
                    className="profileImage"
                  />
                ) : (
                  <div className="circle"></div>
                )}
              </div>
              <div className="profileName">
                {profile.firstName} {profile.lastName}
              </div>
              <div className="profileEmail">{profile.email}</div>
            </>
          ) : (
            <>
              <div className="circle"></div>
              <div className="titleSkeleton"></div>
              <div className="subTitleSkeleton"></div>
            </>
          )}

          {links.length > 0 ? (
            <div className="linksWrapper">
              {links.map((link, index) => (
                <Link key={index} variant={link.platform} href={link.link} />
              ))}
            </div>
          ) : (
            <div className="skeleton">
              <div className="skeleton-rect"></div>
              <div className="skeleton-rect"></div>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};
