import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { menu } from '../data/site.js'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const { pathname } = useLocation()

  // Fecha o menu do celular sempre que a página muda
  useEffect(() => setAberto(false), [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />

        <button
          className="header__toggle"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`nav ${aberto ? 'nav--aberto' : ''}`}>
          {menu.map((item) => (
            <NavLink
              key={item.rota}
              to={item.rota}
              end={item.rota === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--ativo' : ''}`}
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
