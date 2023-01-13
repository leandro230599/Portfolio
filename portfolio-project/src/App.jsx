import { useState, useCallback } from 'react'
import './App.css'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import particlesConfig from '../config/particles-config.json'

function App() {
  const [count, setCount] = useState(0)
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div className="App">
      <Particles options={particlesConfig} init={particlesInit}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  )
}

export default App
