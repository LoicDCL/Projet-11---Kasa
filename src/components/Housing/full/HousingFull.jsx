import Carousel from '../../Carousel/Carousel.jsx'
import HousingHeader from './HousingHeader.jsx'
import HousingDetails from './HousingDetails.jsx'

export default function HousingFull({ logement }) {
  return (
    <article aria-label={`Détail du logement : ${logement.title}`}>
      <Carousel images={logement.pictures} alt={logement.title} />
      <HousingHeader logement={logement} />
      <HousingDetails
        description={logement.description}
        equipments={logement.equipments}
      />
    </article>
  )
}
