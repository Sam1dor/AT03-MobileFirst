import './TituloSecao.css'

export default function TituloSecao( { tituloAtribuido }) {
  return (
    <div className="titulo__container">
      <h2 className="titulo__secao">{tituloAtribuido}</h2>
    </div>
  )
}
