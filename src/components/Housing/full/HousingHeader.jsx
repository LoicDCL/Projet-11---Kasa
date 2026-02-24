import './HousingHeader.scss'

export default function HousingHeader({ logement }) {
  const hostName = logement.host?.name || ''
  const [firstName = '', lastName = ''] = hostName.split(' ')
  const rating = parseInt(logement.rating, 10) || 0

  return (
    <section className="housing-header" aria-label="Informations logement">
      <div className="housing-header__left">
        <h1 className="housing-header__title">{logement.title}</h1>
        <p className="housing-header__location">{logement.location}</p>

        <ul className="housing-header__tags" aria-label="Tags">
          {logement.tags?.map((tag) => (
            <li key={tag} className="housing-header__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="housing-header__right">
        <div className="housing-header__host" aria-label="Hôte">
          <div className="housing-header__host-name">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
          <img
            className="housing-header__avatar"
            src={logement.host?.picture}
            alt={hostName ? `Photo de ${hostName}` : "Photo de l'hôte"}
          />
        </div>

        <div className="housing-header__stars" aria-label={`Note : ${rating} sur 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`housing-header__star ${i < rating ? 'is-on' : ''}`}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
