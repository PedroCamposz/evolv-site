import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import EmConstrucao from './pages/EmConstrucao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

// Cada rota é uma página do site. As páginas marcadas como "EmConstrucao"
// serão substituídas pelas versões finais nas próximas etapas.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<EmConstrucao titulo="O Projeto" />} />
        <Route path="/funcionalidades" element={<EmConstrucao titulo="Funcionalidades" />} />
        <Route path="/tecnologias" element={<EmConstrucao titulo="Tecnologias" />} />
        <Route path="/equipe" element={<EmConstrucao titulo="Equipe" />} />
        <Route path="/documentacao" element={<EmConstrucao titulo="Documentação" />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
