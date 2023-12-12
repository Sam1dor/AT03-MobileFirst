import './MenuGlobal.css'
import { ExpandeColapsa } from './ExpandeColapsa'

export default function MenuGlobal( { primeiroItem, segundoItem, terceiroItem, quartoItem }) {
  return (
    <nav id="navbar" className="navbar">
      <div className="navItem">
        <a className="navItem__a" href="#">{primeiroItem}</a>
        <a className="navItem__a" href="#">{segundoItem}</a>
        <a className="navItem__a" href="#">{terceiroItem}</a>
        <a className="navItem__a" href="#">{quartoItem}</a>
      </div>
      <a onClick={ExpandeColapsa} id="toggle" className="toggle" href="#">=</a>
    </nav>
  )
}



