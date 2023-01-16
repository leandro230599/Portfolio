import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {

  return (
    <div className="App">
      <Home />
      <About />
      {/* TODO: Mejorar el typeit del titulo
          TODO: Aplicar barra de navegacion con about, tecnologias, proyectos, info de contacto */}
    </div>
  )
}

export default App
