import { Link } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { menu, links } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__marca">
          <Logo claro />
          <p>
            Plataforma web de quizzes educacionais gamificados. Projeto Final de Curso de
            Sistemas de Informação — Universidade de Mogi das Cruzes (UMC), 2026.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          {menu.map((item) => (
            <Link key={item.rota} to={item.rota}>{item.rotulo}</Link>
          ))}
        </nav>

        <a className="footer__github" href={links.github} target="_blank" rel="noreferrer">
          <FiGithub size={18} /> Código no GitHub
        </a>
      </div>
      <div className="container footer__base">
        © 2026 EVOLV · Pedro Henrique Campos e Matheus Gende Rodrigues
      </div>
    </footer>
  )
}
