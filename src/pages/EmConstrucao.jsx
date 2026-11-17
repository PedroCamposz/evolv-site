import { Link } from 'react-router-dom'

// Página provisória: será trocada pela página final nas próximas etapas.
export default function EmConstrucao({ titulo }) {
  return (
    <section className="secao">
      <div className="container centro">
        <span className="etiqueta">Em construção</span>
        <h1 className="titulo-pagina">{titulo}</h1>
        <p className="subtitulo">Esta página está sendo desenvolvida.</p>
        <Link to="/" className="botao botao--primario">Voltar ao início</Link>
      </div>
    </section>
  )
}
