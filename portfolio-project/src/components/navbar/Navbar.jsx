import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { SECTIONS } from '../../data/portfolioData';

const Navbar = ({ activeSection, onNavigate, lang, onToggleLang, navLabels }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-inner" aria-label="Main navigation">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => handleNavClick('home')}
          aria-label="Leandro Lopez — Go to top"
        >
          <span className="brand-bracket">&lt;</span>
          <span className="brand-text">LL</span>
          <span className="brand-bracket">/&gt;</span>
        </button>

        <ul className="navbar-links">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={`navbar-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleNavClick(section.id)}
              >
                {navLabels[section.id]}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={onToggleLang}
            aria-label={lang === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a Inglés'}
          >
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className="lang-divider">/</span>
            <span className={lang === 'es' ? 'active' : ''}>ES</span>
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-drawer-links">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                className={`mobile-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => handleNavClick(section.id)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {navLabels[section.id]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
