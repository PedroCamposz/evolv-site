import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Estrutura comum a todas as páginas: cabeçalho, conteúdo e rodapé.
export default function Layout() {
  const { pathname } = useLocation()

  // Ao trocar de página, volta para o topo (o React Router não faz isso sozinho).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
