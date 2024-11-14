import React from 'react';
import { PublicLayout } from '../../components/PublicLayout';
import { RightBlock } from './components/RightBlock';
import { Phone } from '../../components/Phone';

import './style.css';

export const LinksPage: React.FC = () => {
  return (
    <PublicLayout>
      <div className="wrapper">
        <Phone />
        <RightBlock />
      </div>
    </PublicLayout>
  );
};
