import { FiCheck, FiX, FiTarget, FiHelpCircle } from 'react-icons/fi'
import CabecalhoPagina from '../components/CabecalhoPagina.jsx'
import { projeto, cronograma } from '../data/site.js'

export default function Projeto() {
  return (
    <>
      <CabecalhoPagina
        etiqueta="O Projeto"
        titulo="Por que o EVOLV existe"
        texto="EVOLV: Plataforma Web Educacional Gamificada para Quizzes e Análise de Desempenho."
      />

      {/* ---------- PROBLEMA ---------- */}
      <section className="secao">
        <div className="container duas-colunas">
          <div>
            <span className="etiqueta">O problema</span>
            <h2>Nota sozinha não mostra onde está a dificuldade</h2>
            <p>{projeto.problema}</p>
          </div>
          <blockquote className="citacao">
            <FiHelpCircle size={28} />
            <p>{projeto.pergunta}</p>
            <cite>Pergunta de pesquisa do PFC</cite>
          </blockquote>
        </div>
      </section>

      {/* ---------- OBJETIVOS ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Objetivos</span>
            <h2>O que o projeto se propõe a entregar</h2>
          </div>

          <div className="objetivo-geral">
            <FiTarget size={26} />
            <div>
              <strong>Objetivo geral</strong>
              <p>{projeto.objetivoGeral}</p>
            </div>
          </div>

          <ol className="lista-objetivos">
            {projeto.objetivosEspecificos.map((objetivo, i) => (
              <li key={i}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {objetivo}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- ESCOPO ---------- */}
      <section className="secao">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Escopo</span>
            <h2>O que entra e o que fica para depois</h2>
          </div>
          <div className="grade grade--2">
            <div className="cartao">
              <h3>Na primeira versão</h3>
              <ul className="lista-icone">
                {projeto.escopoDentro.map((item) => (
                  <li key={item}><FiCheck className="ok" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="cartao">
              <h3>Fora desta versão</h3>
              <ul className="lista-icone">
                {projeto.escopoFora.map((item) => (
                  <li key={item}><FiX className="nao" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CRONOGRAMA ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <div className="cabecalho-secao">
            <span className="etiqueta">Metodologia</span>
            <h2>Scrum, de agosto a dezembro de 2026</h2>
            <p>As tarefas foram organizadas em ciclos no GitHub Projects, priorizando as funcionalidades principais antes das complementares.</p>
          </div>
          <ol className="linha-tempo">
            {cronograma.map((item) => (
              <li key={item.etapa}>
                <span className="linha-tempo__periodo">{item.periodo}</span>
                <strong>{item.etapa}</strong>
                <p>{item.entrega}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
