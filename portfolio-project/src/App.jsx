import { useCallback, useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import './App.css';
import { PARTICLES_OPTIONS } from './components/config/particles-config';
import { CONTENT, SECTIONS } from './data/portfolioData';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import ProjectModal from './components/projects/ProjectModal';
import Habilidades from './components/habilidades/Habilidades';

function App() {
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  // Lock background scroll while project detail modal is open
  useEffect(() => {
    if (selectedProject) {
      document.documentElement.classList.add('modal-open');
    } else {
      document.documentElement.classList.remove('modal-open');
    }
    return () => document.documentElement.classList.remove('modal-open');
  }, [selectedProject]);

  // Track currently visible section in the viewport
  useEffect(() => {
    const sectionElements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (sectionElements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.35, 0.6],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = CONTENT[lang];

  return (
    <div className="app-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={PARTICLES_OPTIONS}
      />

      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        lang={lang}
        onToggleLang={toggleLang}
        navLabels={t.nav}
      />

      {/* Side section navigation dots (desktop/tablet) */}
      <nav className="section-dots" aria-label="Section navigation">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`section-dot-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={section.label[lang]}
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className="section-dot-tooltip">{section.label[lang]}</span>
          </button>
        ))}
      </nav>

      <main className="scroll-container">
        <Home
          content={t.hero}
          lang={lang}
          onNavigate={scrollToSection}
        />

        <About content={t.about} />

        <Projects
          content={t.projects}
          lang={lang}
          onSelectProject={setSelectedProject}
        />

        <Habilidades
          content={t.skills}
          footerContent={t.footer}
          onScrollTop={() => scrollToSection('home')}
        />
      </main>

      <ProjectModal
        project={selectedProject}
        lang={lang}
        labels={t.projects.modal}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
