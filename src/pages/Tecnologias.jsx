import { FiLock, FiKey, FiUsers, FiFileText, FiShield, FiCheckSquare } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { camadas, ferramentas, seguranca } from '../data/site.js'

const iconesSeguranca = [FiLock, FiKey, FiUsers, FiFileText, FiShield, FiCheckSquare]

export default function Tecnologias() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="Tecnologias"
        titulo="Arquitetura em camadas"
        texto="Interface, regras de negócio e dados ficam separados, conversando por uma API REST."
      />

      {/* ---------- DIAGRAMA DE CAMADAS ---------- */}
      <section className="secao">
        <div className="container">
          <div className="camadas">
            {camadas.map((c, i) => (
              <div key={c.nome} className="camada-bloco">
                <div className="camada">
                  <span className="camada__numero">{i + 1}</span>
                  <div>
                    <h3>{c.nome}</h3>
                    <span className="camada__tec">{c.tecnologias}</span>
                    <p>{c.papel}</p>
                  </div>
                </div>
                {i < camadas.length - 1 && <div className="camada__seta" aria-hidden="true">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FERRAMENTAS ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Ferramentas</span>
            <h2>Apoio ao desenvolvimento</h2>
          </div>
          <div className="grade grade--3">
            {ferramentas.map((f) => (
              <div key={f.nome} className="ferramenta">
                <strong>{f.nome}</strong>
                <span>{f.uso}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SEGURANÇA ---------- */}
      <section className="secao">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Segurança e LGPD</span>
            <h2>Proteção desde o projeto</h2>
          </div>
          <div className="grade grade--3">
            {seguranca.map((s, i) => {
              const Icone = iconesSeguranca[i]
              return (
                <article key={s.titulo} className="cartao">
                  <div className="cartao__icone"><Icone size={22} /></div>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
