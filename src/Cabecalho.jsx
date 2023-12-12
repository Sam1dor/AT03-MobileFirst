import "./Cabecalho.css";

export default function Cabecalho( { logoLoja, nomeLoja, imagemCabecalhoMenu1, textoCabecalhoMenu1, imagemCabecalhoMenu2, textoCabecalhoMenu2, imagemCabecalhoMenu1Alt, imagemCabecalhoMenu2Alt, logoLojaAlt }) {
  return (
    <header className="cabecalho_container">
      <div className="cabecalho_container-box">
        <img className="cabecalho__img" src={logoLoja} alt={logoLojaAlt}></img>
        <h1 className="cabecalho__titulo">{nomeLoja}</h1>
      </div>
      <div className="cabecalho_container-menu">
        <a href="#"><img className="cabecalho_container-menu-img" src={imagemCabecalhoMenu1} alt={imagemCabecalhoMenu1Alt}></img></a>
        <p className="cabecalho_container-menu-texto">{textoCabecalhoMenu1}</p>
        <a href="#"><img className="cabecalho_container-menu-img" src={imagemCabecalhoMenu2} alt={imagemCabecalhoMenu2Alt}></img></a>
        <p className="cabecalho_container-menu-texto">{textoCabecalhoMenu2}</p>
      </div>
    </header>
  )
}
