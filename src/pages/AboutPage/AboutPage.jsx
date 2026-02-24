import Banner from '../../components/Banner/Banner.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import aboutBanner from '../../assets/images/about-banner.png'
import './AboutPage.scss'

export default function AboutPage() {
  return (
    <div className="container">
      <Banner imageSrc={aboutBanner} title="" />
      <section className="about" aria-label="Valeurs de Kasa">
        <div className="collapse-stack">
          <Collapse title="Fiabilité" defaultOpen>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées.
          </Collapse>
          <Collapse title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme.
          </Collapse>
          <Collapse title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </Collapse>
          <Collapse title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement respecte les critères de sécurité en vigueur.
          </Collapse>
        </div>
      </section>
    </div>
  )
}
