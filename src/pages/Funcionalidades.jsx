import { useState } from 'react'
import { FiUser, FiBookOpen, FiShield } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { funcionalidades, regrasGamificacao, conquistas } from '../data/site.js'

const icones = { Aluno: FiUser, Professor: FiBookOpen, Administrador: FiShield }

export default function Funcionalidades() {
  // Guarda qual perfil está selecionado nas abas
  const [perfil, setPerfil] = useState('Aluno')
  const perfis = Object.keys(funcionalidades)

  return (
    <>
      <CabecalhoPagina
        etiqueta="Funcionalidades"
        titulo="Tudo o que cada perfil pode fazer"
        texto="O perfil da conta define o que aparece no sistema. Escolha um perfil para ver os recursos."
      />

      {/* ---------- ABAS POR PERFIL ---------- */}
      <section className="secao">
        <div className="container">
          <div className="abas" role="tablist">
            {perfis.map((nome) => {
              const Icone = icones[nome]
              return (
                <button
                  key={nome}
                  role="tab"
                  aria-selected={perfil === nome}
                  className={`aba ${perfil === nome ? 'aba--ativa' : ''}`}
                  onClick={() => setPerfil(nome)}
                >
                  <Icone /> {nome}
                </button>
              )
            })}
          </div>

          <div className="grade grade--3" role="tabpanel" key={perfil}>
            {funcionalidades[perfil].map((f) => (
              <article key={f.titulo} className="cartao cartao--entrada">
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GAMIFICAÇÃO ---------- */}
      <section className="secao secao--escura">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta etiqueta--escura">Gamificação</span>
            <h2>As regras do jogo</h2>
            <p>O resultado do quiz não é só uma nota: ele alimenta XP, nível, ranking e conquistas.</p>
          </div>

          <div className="regras">
            {regrasGamificacao.map((r) => (
              <div key={r.texto} className="regra">
                <strong>{r.valor}</strong>
                <span>{r.texto}</span>
              </div>
            ))}
          </div>

          <p className="exemplo">
            Exemplo: acertar 8 de 10 questões rende 10 + 8 × 5 = <strong>50 XP</strong>. Com 370 XP, o aluno está no nível 3 + 1 = <strong>4</strong> (370 ÷ 100 dá 3 na divisão inteira).
          </p>

          <div className="grade grade--4">
            {conquistas.map((c) => (
              <div key={c.nome} className="conquista">
                <span className="conquista__icone">{c.icone}</span>
                <strong>{c.nome}</strong>
                <span>{c.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
