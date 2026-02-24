import HousingCard from './compact/HousingCard.jsx'
import HousingFull from './full/HousingFull.jsx'

export default function Housing({ logement, compact = false }) {
  if (compact) {
    return <HousingCard logement={logement} />
  }
  return <HousingFull logement={logement} />
}
