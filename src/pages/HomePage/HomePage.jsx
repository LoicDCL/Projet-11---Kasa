import Banner from '../../components/Banner/Banner.jsx'
import Housing from '../../components/Housing/index.jsx'
import homeBanner from '../../assets/images/home-banner.png'
import logements from '../../data/logements.json'
import './HomePage.scss'

export default function HomePage() {
  return (
    <div className="container">
      <Banner imageSrc={homeBanner} title="Chez vous, partout et ailleurs" />
      <section className="gallery" aria-label="Locations disponibles">
        <div className="cards">
          {logements.map((logement) => (
            <Housing key={logement.id} logement={logement} compact />
          ))}
        </div>
      </section>
    </div>
  )
}
