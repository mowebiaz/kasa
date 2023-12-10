import './footer.scss'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'

export function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <Logo />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
