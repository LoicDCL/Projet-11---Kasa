import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Housing from '../../components/Housing/index.jsx'
import logements from '../../data/logements.json'

export default function HousingPage() {
  const { id } = useParams()
  const logement = useMemo(() => logements.find((l) => l.id === id), [id])

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="container">
      <Housing logement={logement} />
    </div>
  )
}
