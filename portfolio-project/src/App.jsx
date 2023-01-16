import './App.css'
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import * as particlesConfig from './components/config/particles-config'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {

    const particlesInit = useCallback(async engine => {
      await loadFull(engine);
    }, []);

    return (
      <div className="App">
        <Particles className='particles' init={particlesInit} params={particlesConfig.PARTICLES_OPTIONS} />
        <Home />
        <About />
        {/*
            TODO: Aplicar barra de navegacion con about, tecnologias, proyectos, info de contacto */}
      </div>
    )
}

export default App
