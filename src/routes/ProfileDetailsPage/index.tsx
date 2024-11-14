import React from 'react';
import { PublicLayout } from '../../components/PublicLayout';
import { Phone } from '../../components/Phone';
import { RightBlock } from './components/RightBlock';

import './style.css';

export const ProfileDetailsPage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="wrapper">
        <Phone />
        <RightBlock />
      </div>
    </PublicLayout>
  );
};
