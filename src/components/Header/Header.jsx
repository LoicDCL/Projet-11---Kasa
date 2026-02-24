import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/Header-Logo.png'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink className="brand" to="/" aria-label="Aller à l'accueil">
          <img className="h-logo" src={logo} alt="Kasa" />
        </NavLink>
        <nav className="nav" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">A Propos</NavLink>
        </nav>
      </div>
    </header>
  )
}
