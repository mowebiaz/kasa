import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo/logo.svg'

export function Header() {
    return (
        <header>
            <Logo />
            <nav>
                <NavLink to="/home">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}
