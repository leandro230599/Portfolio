import React from 'react';
import './Habilidades.css';
import Item from './Item';
import { TECH_CATEGORIES, SOCIAL_LINKS } from '../../data/portfolioData';

const Habilidades = ({ content, footerContent, onScrollTop }) => {
  return (
    <section id="skills" className="page-section skills-section">
      <div className="section-inner skills-wrapper">
        <div>
          <header className="section-header">
            <span className="section-eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-subtitle">{content.subtitle}</p>
          </header>

          <div className="skills-groups">
            {TECH_CATEGORIES.map((category) => (
              <div key={category.key} className="skills-group-card">
                <h3 className="skills-group-title">
                  {content.categories[category.key]}
                </h3>
                <div className="skills-items-grid">
                  {category.items.map((item) => (
                    <Item
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                      badge={item.badge}
                      accent={item.accent}
                      invertOnDark={item.invertOnDark}
                      cropLeft={item.cropLeft}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="site-footer">
          <p className="footer-copy">{footerContent.crafted}</p>

          <div className="footer-right">
            <div className="footer-links">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={SOCIAL_LINKS.email}>Email</a>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={onScrollTop}
            >
              <span>{footerContent.backToTop}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Habilidades;
