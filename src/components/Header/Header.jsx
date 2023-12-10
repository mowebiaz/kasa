import './header.scss'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'

export function Header() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}
