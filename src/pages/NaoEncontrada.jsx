import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="container centro">
        <span className="etiqueta">Erro 404</span>
        <h1 className="titulo-pagina">Página não encontrada</h1>
        <p className="subtitulo">O endereço que você acessou não existe neste site.</p>
        <Link to="/" className="botao botao--primario">Voltar ao início</Link>
      </div>
    </section>
  )
}
