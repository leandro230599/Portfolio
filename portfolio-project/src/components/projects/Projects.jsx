import React from 'react';
import './Projects.css';
import { PROJECTS } from '../../data/portfolioData';

const Projects = ({ content, lang, onSelectProject }) => {
  const isSingle = PROJECTS.length === 1;

  return (
    <section id="projects" className="page-section projects-section">
      <div className="section-inner">
        <header className="section-header">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </header>

        <div className={`projects-grid ${isSingle ? 'single-project' : ''}`}>
          {PROJECTS.map((project) => {
            const cover = project.images[0];
            const imgCount = project.images.length;
            const visibleTags = isSingle ? project.tech.slice(0, 6) : project.tech.slice(0, 4);

            return (
              <article
                key={project.id}
                className={`project-card ${isSingle ? 'featured' : ''} ${project.isMobileShowcase ? 'mobile-showcase' : ''}`}
              >
                <button
                  type="button"
                  className="project-card-trigger"
                  onClick={() => onSelectProject(project)}
                  aria-label={`${project.title[lang]} — ${content.viewDetails}`}
                >
                  <div className="project-card-media">
                    <div className={project.isMobileShowcase ? 'phone-frame-card' : 'landscape-frame-card'}>
                      <img
                        src={cover.src}
                        alt={cover.caption?.[lang] || project.title[lang]}
                        className="project-card-img"
                        loading="lazy"
                      />
                    </div>
                    <span className="project-category-badge">
                      {project.category[lang]}
                    </span>
                    {imgCount > 1 && (
                      <span className="project-gallery-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                        <span>
                          {imgCount} {imgCount === 1 ? content.photoLabel : content.photosLabel}
                        </span>
                      </span>
                    )}
                  </div>

                  <div className="project-card-body">
                    {project.role?.[lang] && (
                      <span className="project-role-line">
                        {content.rolePrefix}: <strong>{project.role[lang]}</strong>
                      </span>
                    )}
                    <h3 className="project-card-title">{project.title[lang]}</h3>
                    <p className="project-card-summary">{project.summary[lang]}</p>

                    <div className="project-tags">
                      {visibleTags.map((tech) => (
                        <span key={tech} className="project-tag">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > visibleTags.length && (
                        <span className="project-tag more">
                          +{project.tech.length - visibleTags.length}
                        </span>
                      )}
                    </div>

                    <div className="project-card-footer">
                      <span className="project-cta-text">{content.viewDetails}</span>
                      <span className="project-cta-arrow" aria-hidden="true">→</span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
