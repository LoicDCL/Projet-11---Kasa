import logo from '../../assets/images/Footer-Logo.png'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="f-logo" src={logo} alt="Kasa" />
        <div className="footer__copy">© 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  )
}
