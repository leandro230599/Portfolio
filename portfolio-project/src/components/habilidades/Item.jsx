import React from 'react';
import './Item.css';

const Item = ({ name, icon, badge, accent, invertOnDark, cropLeft }) => {
  const imgClasses = [
    'tech-icon-img',
    invertOnDark ? 'invert-dark' : '',
    cropLeft ? 'crop-left' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="tech-pill" style={{ '--tech-accent': accent || '#0be779' }}>
      <div className="tech-icon-box">
        {icon ? (
          <img
            className={imgClasses}
            src={icon}
            alt={name}
            loading="lazy"
          />
        ) : (
          <span className="tech-icon-badge" aria-hidden="true">
            {badge}
          </span>
        )}
      </div>
      <span className="tech-name">{name}</span>
    </div>
  );
};

export default Item;
