import { FiGithub } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { equipe, orientador } from '../data/site.js'

// Pega as iniciais do nome para montar o avatar (ex.: "Pedro Henrique Campos" → "PC")
function iniciais(nome) {
  const partes = nome.replace('Prof. ', '').split(' ')
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
}

function Pessoa({ pessoa, destaque = false }) {
  return (
    <article className={`pessoa ${destaque ? 'pessoa--destaque' : ''}`}>
      <div className="pessoa__avatar">{iniciais(pessoa.nome)}</div>
      <span className="pessoa__papel">{pessoa.papel}</span>
      <h3>{pessoa.nome}</h3>
      <p>{pessoa.texto}</p>
      {pessoa.github && (
        <a href={pessoa.github} target="_blank" rel="noreferrer" className="link-seta">
          <FiGithub /> GitHub
        </a>
      )}
    </article>
  )
}

export default function Equipe() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Equipe"
        titulo="Quem está por trás do EVOLV"
        texto="Projeto Final de Curso do Bacharelado em Sistemas de Informação da Universidade de Mogi das Cruzes, turma noturna."
      />

      <section className="secao">
        <div className="container">
          <div className="grade grade--2 equipe">
            {equipe.map((p) => <Pessoa key={p.nome} pessoa={p} />)}
          </div>

          <div className="orientacao">
            <Pessoa pessoa={orientador} destaque />
          </div>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container centro">
          <span className="etiqueta">Universidade de Mogi das Cruzes</span>
          <h2>Mogi das Cruzes · SP · 2026</h2>
          <p className="subtitulo">
            O projeto aplica, na prática, o que foi estudado no curso: engenharia de software,
            banco de dados, desenvolvimento web, segurança, testes e UX/UI.
          </p>
        </div>
      </section>
    </>
  )
}
