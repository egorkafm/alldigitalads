import React from 'react';

import './style.css';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="sectionHeader">
      <h2 className="sectionTitle">{title}</h2>
      {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
    </div>
  );
};
