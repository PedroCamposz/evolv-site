import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projeto from './pages/Projeto.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Equipe from './pages/Equipe.jsx'
import Documentacao from './pages/Documentacao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Cada rota é uma página do site. O Layout (cabeçalho + rodapé) envolve todas.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/documentacao" element={<Documentacao />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
