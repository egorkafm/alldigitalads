import React from 'react';
import { Paper } from '../../../../components/Paper';
import { Button } from '../../../../components/Button';
import { LinkItem } from '../../../../components/LinkItem';
import { useStore } from '../../../../context/StoreContext.tsx';
import { SectionHeader } from '../../../../components/SectionHeader';

import './style.css';

export const RightBlock: React.FC = () => {
  const { links, addLink, updateLink, removeLink, saveLinks } = useStore();

  const isSaveDisabled = links.some((link) => link.link.trim() === '');

  return (
    <Paper className="rightBlock">
      <SectionHeader
        title="Customize your links"
        subtitle="Add/edit/remove links below and then share all your profile with the
        world!"
      />
      <Button variant="outline" style={{ marginTop: '2rem' }} onClick={addLink}>
        + Add new link
      </Button>
      <div className="links-list">
        {links.map((link, index) => (
          <LinkItem
            key={link.id}
            index={index}
            platform={link.platform}
            link={link.link}
            onPlatformChange={(value) => {
              updateLink(link.id, 'platform', value);
              updateLink(index, 'backgroundColor', link.backgroundColor);
            }}
            onLinkChange={(value) => updateLink(link.id, 'link', value)}
            onRemove={() => removeLink(link.id)}
          />
        ))}
      </div>
      {links.length ? (
        <Button
          style={{ width: '100%', maxWidth: '5rem', margin: '3rem 0 0 auto' }}
          onClick={saveLinks}
          disabled={isSaveDisabled}
        >
          Save
        </Button>
      ) : null}
    </Paper>
  );
};
