import React from 'react';
import './About.css';

const HighlightIcon = ({ type }) => {
  switch (type) {
    case 'server':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      );
    case 'code':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'academic':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'location':
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
};

const About = ({ content }) => {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-inner">
        <header className="section-header">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
        </header>

        <div className="about-layout">
          <div className="about-bio-card">
            <p className="about-lead">{content.lead}</p>
            <p className="about-body">{content.bio1}</p>
            <p className="about-body">{content.bio2}</p>

            <div className="about-code-card" aria-label="Developer summary snippet">
              <div className="code-header">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
                <span className="code-filename">{content.codeComment}</span>
              </div>
              <pre className="code-body">
                <code>
                  <span className="code-punct">{'{'}</span>
                  {'\n  '}
                  <span className="code-key">"name"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"Leandro Lopez"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"role"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"Full-Stack Developer"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"favoriteLanguage"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"JavaScript"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"education"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"Licenciatura en Sistemas (UNLP)"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"since"</span>
                  <span className="code-punct">: </span>
                  <span className="code-num">2021</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"location"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"Berazategui, Buenos Aires, AR"</span>
                  <span className="code-punct">,</span>
                  {'\n  '}
                  <span className="code-key">"modality"</span>
                  <span className="code-punct">: </span>
                  <span className="code-str">"Remote / On-site"</span>
                  {'\n'}
                  <span className="code-punct">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="about-bento">
            {content.highlights.map((item) => (
              <article key={item.title} className="bento-card">
                <div className="bento-icon">
                  <HighlightIcon type={item.icon} />
                </div>
                <span className="bento-label">{item.label}</span>
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
