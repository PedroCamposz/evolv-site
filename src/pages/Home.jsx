import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiEdit3, FiPlayCircle, FiBarChart2, FiUser, FiBookOpen, FiShield } from 'react-icons/fi'
import { links, numeros, passos, perfis } from '../data/site.js'

const iconesPassos = [FiEdit3, FiPlayCircle, FiBarChart2]
const iconesPerfis = [FiUser, FiBookOpen, FiShield]

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__texto">
            <span className="etiqueta">Projeto Final de Curso · UMC 2026</span>
            <h1>
              Aprender fica melhor quando <span className="destaque">dá vontade de jogar</span>.
            </h1>
            <p className="subtitulo">
              O EVOLV é uma plataforma web de quizzes educacionais com XP, níveis, ranking e
              conquistas. O professor cria, o aluno evolui, e os dois acompanham o progresso em
              dashboards próprios.
            </p>
            <div className="hero__acoes">
              <Link to="/projeto" className="botao botao--primario">
                Conhecer o projeto <FiArrowRight />
              </Link>
              <a href={links.github} target="_blank" rel="noreferrer" className="botao botao--secundario">
                <FiGithub /> Ver no GitHub
              </a>
            </div>
          </div>

          {/* Ilustração feita só com HTML/CSS, imitando a tela de resultado do quiz */}
          <div className="hero__visual" aria-hidden="true">
            <div className="cartao-quiz">
              <div className="cartao-quiz__topo">
                <span>Quiz · Banco de Dados</span>
                <span className="selo">+50 XP</span>
              </div>
              <div className="anel">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" className="anel__fundo" />
                  <circle cx="60" cy="60" r="50" className="anel__valor" />
                </svg>
                <div className="anel__texto">
                  <strong>8/10</strong>
                  <span>acertos</span>
                </div>
              </div>
              <div className="barra-nivel">
                <div className="barra-nivel__rotulo">
                  <span>Nível 4</span>
                  <span>370 XP · faltam 30</span>
                </div>
                <div className="barra-nivel__trilho">
                  <div className="barra-nivel__progresso" />
                </div>
              </div>
            </div>
            <div className="medalha medalha--1">🏆 Gabaritou!</div>
            <div className="medalha medalha--2">🔥 #2 no ranking</div>
          </div>
        </div>
      </section>

      {/* ---------- NÚMEROS ---------- */}
      <section className="numeros">
        <div className="container numeros__grade">
          {numeros.map((n) => (
            <div key={n.rotulo} className="numero">
              <strong>{n.valor}</strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- COMO FUNCIONA ---------- */}
      <section className="secao">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Como funciona</span>
            <h2>Do quiz criado ao resultado analisado</h2>
          </div>
          <div className="grade grade--3">
            {passos.map((p, i) => {
              const Icone = iconesPassos[i]
              return (
                <article key={p.titulo} className="cartao">
                  <div className="cartao__icone"><Icone size={22} /></div>
                  <span className="cartao__numero">0{i + 1}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- PERFIS ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Para quem é</span>
            <h2>Três perfis, cada um com sua experiência</h2>
          </div>
          <div className="grade grade--3">
            {perfis.map((p, i) => {
              const Icone = iconesPerfis[i]
              return (
                <article key={p.nome} className="cartao cartao--perfil">
                  <div className="cartao__icone"><Icone size={22} /></div>
                  <h3>{p.nome}</h3>
                  <p>{p.resumo}</p>
                </article>
              )
            })}
          </div>
          <div className="centro mt">
            <Link to="/funcionalidades" className="link-seta">
              Ver todas as funcionalidades <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CHAMADA FINAL ---------- */}
      <section className="secao">
        <div className="container">
          <div className="chamada">
            <h2>Quer ver como foi construído?</h2>
            <p>Conheça a arquitetura, as tecnologias e a equipe por trás do EVOLV.</p>
            <div className="hero__acoes">
              <Link to="/tecnologias" className="botao botao--claro">Tecnologias</Link>
              <Link to="/equipe" className="botao botao--contorno-claro">Equipe</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
