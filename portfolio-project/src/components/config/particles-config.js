export const PARTICLES_OPTIONS = {
  fpsLimit: 60,
  detectRetina: true,
  background: {
    color: {
      value: '#0b0f14',
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 42,
      density: {
        enable: true,
        area: 1000,
      },
    },
    color: {
      value: ['#0be779', '#38bdf8', '#94a3b8'],
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: { min: 0.15, max: 0.4 },
    },
    size: {
      value: { min: 1.2, max: 2.8 },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#475569',
      opacity: 0.22,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.85,
      direction: 'none',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 160,
        links: {
          opacity: 0.45,
          color: '#0be779',
        },
      },
    },
  },
};
