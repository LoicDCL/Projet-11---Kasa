import { Link } from 'react-router-dom'
import './HousingCard.scss'

export default function HousingCard({ logement }) {
  return (
    <Link
      to={`/logement/${logement.id}`}
      className="housing-card"
      aria-label={`Voir le logement : ${logement.title}`}
    >
      <img
        className="housing-card__img"
        src={logement.cover}
        alt={logement.title}
      />
      <div className="housing-card__title">{logement.title}</div>
    </Link>
  )
}
