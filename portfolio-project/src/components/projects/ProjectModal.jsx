import React, { useState, useEffect, useCallback } from 'react';
import './Projects.css';

const ProjectModal = ({ project, lang, labels, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  const images = project?.images || [];
  const hasMultipleImages = images.length > 1;

  const handlePrev = useCallback(() => {
    setActiveImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (hasMultipleImages && e.key === 'ArrowLeft') {
        handlePrev();
      } else if (hasMultipleImages && e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, hasMultipleImages, handlePrev, handleNext, onClose]);

  if (!project) return null;

  const currentImage = images[activeImgIndex] || images[0];
  const isMobile = Boolean(project.isMobileShowcase);

  return (
    <div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label={labels.close}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="modal-scroll-body">
          {/* Interactive Image Gallery */}
          <div className={`modal-gallery ${isMobile ? 'is-mobile' : ''}`}>
            <div className={`modal-stage ${isMobile ? 'mobile-stage' : ''}`}>
              <img
                src={currentImage.src}
                alt={currentImage.caption?.[lang] || project.title[lang]}
                className={`modal-main-image ${isMobile ? 'mobile-screen' : ''}`}
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className="gallery-nav-btn prev"
                    onClick={handlePrev}
                    aria-label={labels.prevImage}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="gallery-nav-btn next"
                    onClick={handleNext}
                    aria-label={labels.nextImage}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>

                  <span className="gallery-counter">
                    {activeImgIndex + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {currentImage.caption?.[lang] && (
              <p className="gallery-caption">{currentImage.caption[lang]}</p>
            )}

            {hasMultipleImages && (
              <div className="gallery-thumbs" role="tablist" aria-label="Project screenshots">
                {images.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeImgIndex}
                    className={`gallery-thumb ${isMobile ? 'mobile-thumb' : ''} ${idx === activeImgIndex ? 'active' : ''}`}
                    onClick={() => setActiveImgIndex(idx)}
                  >
                    <img
                      src={img.src}
                      alt={img.caption?.[lang] || `${project.title[lang]} ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Information */}
          <div className="modal-info">
            <div className="modal-meta">
              <span className="project-category-pill">
                {labels.roleLabel}: {project.role?.[lang] || project.category[lang]}
              </span>
              {project.year && <span className="modal-year">{project.year}</span>}
            </div>

            <h3 id="project-modal-title" className="modal-title">
              {project.title[lang]}
            </h3>

            <div className="modal-section">
              <h4 className="modal-section-heading">{labels.overview}</h4>
              <p className="modal-description">{project.description[lang]}</p>
            </div>

            {project.highlights?.[lang]?.length > 0 && (
              <div className="modal-section">
                <h4 className="modal-section-heading">{labels.highlights}</h4>
                <ul className="modal-highlights">
                  {project.highlights[lang].map((point) => (
                    <li key={point}>
                      <span className="highlight-check" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-section">
              <h4 className="modal-section-heading">{labels.technologies}</h4>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="modal-actions">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary modal-action-btn"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                    </svg>
                    <span>{labels.viewCode}</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary modal-action-btn"
                  >
                    <span>{labels.liveDemo}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
