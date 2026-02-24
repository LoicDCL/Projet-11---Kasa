import Collapse from '../../Collapse/Collapse.jsx'
import './HousingDetails.scss'

export default function HousingDetails({ description, equipments }) {
  return (
    <section className="housing-details" aria-label="Détails du logement">
      <Collapse title="Description" defaultOpen>
        {description}
      </Collapse>

      <Collapse title="Équipements">
        <ul className="housing-details__equipment-list">
          {equipments?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Collapse>
    </section>
  )
}
