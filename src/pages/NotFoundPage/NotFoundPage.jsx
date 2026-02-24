import { Link } from 'react-router-dom'
import './NotFoundPage.scss'

export default function NotFoundPage() {
  return (
    <div className="container">
      <section className="notfound" aria-label="Page introuvable">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="notfound__link" to="/">Retourner sur la page d’accueil</Link>
      </section>
    </div>
  )
}
