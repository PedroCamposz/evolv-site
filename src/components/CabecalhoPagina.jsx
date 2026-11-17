// Faixa de título usada no topo de todas as páginas internas.
export default function CabecalhoPagina({ etiqueta, titulo, texto }) {
  return (
    <section className="cabecalho-pagina">
      <div className="container">
        <span className="etiqueta">{etiqueta}</span>
        <h1 className="titulo-pagina">{titulo}</h1>
        {texto && <p className="subtitulo">{texto}</p>}
      </div>
    </section>
  )
}
