import { Banner } from '../components/Banner'
import aboutBannerImage from '../assets/images/aboutbanner.png'

export function About() {
    return (
        <div className="about container">
            <Banner image={aboutBannerImage} alt="Photo de montagnes" />
        </div>
    )
}
