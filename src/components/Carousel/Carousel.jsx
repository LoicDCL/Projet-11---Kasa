import { useMemo, useState } from 'react'
import './Carousel.scss'

export default function Carousel({ images = [], alt = '' }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)

  if (!safeImages.length) return null

  const total = safeImages.length
  const current = safeImages[index]

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <section className="carousel" aria-label="Galerie photos">
      <img src={current} alt={alt} />
      {total > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            aria-label="Image précédente"
            onClick={prev}
          >
            ‹
          </button>
          <button
            className="carousel__arrow carousel__arrow--right"
            aria-label="Image suivante"
            onClick={next}
          >
            ›
          </button>
          <div className="carousel__count">{index + 1}/{total}</div>
        </>
      )}
    </section>
  )
}
