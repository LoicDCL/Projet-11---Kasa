import './Banner.scss'

export default function Banner({ imageSrc, title }) {
  return (
    <section className="hero" aria-label="Bannière">
      <img src={imageSrc} alt="" />
      <div
        className="hero__title"
        aria-hidden={!title ? 'true' : undefined}
      >
        {title || ''}
      </div>
    </section>
  )
}
