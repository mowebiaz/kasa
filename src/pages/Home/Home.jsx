import { Banner } from '../../components/Banner/Banner'
import { Card } from '../../components/Card/Card'
import homeBannerImage from '../../assets/images/homebanner.png'
import { FetchApartmentsList } from '../../utils/FetchApartmentsList'

export function Home() {
    const { isLoading, apartmentsList, error } = FetchApartmentsList()

    if (error) {
        return <p>Impossible de charger la liste des appartements</p>
    }

    return (
        <div className="home container">
            <Banner
                bannerTitle="Chez vous, partout et ailleurs"
                image={homeBannerImage}
                alt="Photo de falaises face à la mer"
            />
            {isLoading ? (
                <p>Chargement de la page</p>
            ) : (
                <div className="gallery">
                    {apartmentsList.map((oneApartment) => (
                        <Card key={oneApartment.id} apartment={oneApartment} />
                    ))}
                </div>
            )}
        </div>
    )
}
