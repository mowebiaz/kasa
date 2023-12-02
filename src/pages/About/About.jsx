import { Banner } from '../../components/Banner/Banner'
import aboutBannerImage from '../../assets/images/aboutbanner.png'
import { Collapse } from '../../components/Collapse/Collapse'

export const aboutData = [
    {
        title: 'Fiabilité',
        content:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        title: 'Respect',
        content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Service',
        content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title: 'Sécurité',
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

export function About() {
    return (
        <div className="about container">
            <Banner image={aboutBannerImage} alt="Photo de montagnes" />
            <section className="content">
                {aboutData.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </section>
        </div>
    )
}
