import React from 'react';
import { PublicLayout } from '../../components/PublicLayout';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext.tsx';
import { Phone } from '../../components/Phone';

import './style.css';

export const PreviewPage: React.FC = () => {
  const navigate = useNavigate();

  const { links } = useStore();

  const handleShareLink = () => {
    const formattedLinks = links
      .map((link) => `${link.platform}: ${link.link}`)
      .join('\n');

    navigator.clipboard
      .writeText(formattedLinks)
      .then(() => {
        if (links.length) {
          alert('Links copied to clipboard!');
        } else {
          alert(' clipboard!');
        }
      })
      .catch((error) => {
        console.error('Failed to copy links: ', error);
      });
  };
  return (
    <PublicLayout
      customHeader={
        <div className="Header">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back to Editor
          </Button>
          <Button variant="bg" onClick={handleShareLink}>
            Share Link
          </Button>
        </div>
      }
      styleHeader={{
        margin: 0,
        height: '320px',
        background: '#633BFE',
        justifyContent: 'flex-start',
        borderRadius: '0 0 1rem 1rem',
      }}
    >
      <div className="previewPhoneWrapper">
        <Phone
          styleType="color"
          hideOnMobile={false}
          style={{ width: '100%' }}
        />
      </div>
    </PublicLayout>
  );
};
