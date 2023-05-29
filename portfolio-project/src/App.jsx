import './App.css'
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import * as particlesConfig from './components/config/particles-config'
import Home from './components/home/Home'
import About from './components/about/About'
import Habilidades from './components/habilidades/Habilidades'

function App() {

    const particlesInit = useCallback(async engine => {
      await loadFull(engine);
    }, []);

    return (
      <div className="App">
        <Particles className='particles' init={particlesInit} params={particlesConfig.PARTICLES_OPTIONS} />
        <Home />
        <About />
        <Habilidades />
        {/*
            TODO: Aplicar barra de navegacion con proyectos, info de contacto */}
      </div>
    )
}

export default App
