import { useState } from 'react'
import { FiExternalLink, FiChevronDown } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { recursos, referencias, perguntas } from '../data/site.js'

export default function Documentacao() {
  // Índice da pergunta aberta no FAQ (null = todas fechadas)
  const [aberta, setAberta] = useState(null)

  return (
    <>
      <CabecalhoPagina
        etiqueta="Documentação"
        titulo="Links, referências e dúvidas"
        texto="Material de apoio para conhecer o EVOLV em detalhes."
      />

      {/* ---------- LINKS ---------- */}
      <section className="secao">
        <div className="container">
          <div className="grade grade--3">
            {recursos.map((r) => (
              <a key={r.titulo} href={r.url} target="_blank" rel="noreferrer" className="cartao cartao--link">
                <h3>{r.titulo} <FiExternalLink /></h3>
                <p>{r.texto}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="secao secao--suave">
        <div className="container estreito">
          <div className="cabecalho-secao">
            <span className="etiqueta">Perguntas frequentes</span>
            <h2>Dúvidas comuns</h2>
          </div>
          <div className="faq">
            {perguntas.map((item, i) => (
              <div key={item.pergunta} className={`faq__item ${aberta === i ? 'faq__item--aberto' : ''}`}>
                <button
                  className="faq__pergunta"
                  onClick={() => setAberta(aberta === i ? null : i)}
                  aria-expanded={aberta === i}
                >
                  {item.pergunta}
                  <FiChevronDown />
                </button>
                {aberta === i && <p className="faq__resposta">{item.resposta}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REFERÊNCIAS ---------- */}
      <section className="secao">
        <div className="container estreito">
          <div className="cabecalho-secao">
            <span className="etiqueta">Referências</span>
            <h2>Fundamentação teórica</h2>
          </div>
          <ul className="referencias">
            {referencias.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
