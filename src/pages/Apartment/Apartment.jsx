import { redirect, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { FetchApartmentsList } from '../../utils/FetchApartmentsList'
import { Slider } from '../../components/Slider/Slider'
import { Collapse } from '../../components/Collapse/Collapse'
import { Rate } from '../../components/Rate/Rate'
import { Tags } from '../../components/Tags/Tags'
import { ErrorPage } from '../ErrorPage/ErrorPage'

/**
 * Renders the details of an apartment based on the provided ID.
 *
 */
export function Apartment() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { apartmentId } = useParams()
    const { isLoading, apartmentsList, error } = FetchApartmentsList()

    if (error) {
        return <p>Impossible de charger la liste des appartements</p>
    }

    /*if (apartmentsList.map((object) => object.id).includes(apartmentId)) {
        return <p>trouvé</p>
    } else {
        return <ErrorPage />
    }*/

    const apartmentDetails = apartmentsList.find(
        (object) => object.id === apartmentId
    )

    if (!apartmentDetails) {
        return <ErrorPage />
        /*const navigate = useNavigate('/*')*/
    }

    return (
        <div className="apartment container">
            {isLoading ? (
                <p>Chargement en cours</p>
            ) : (
                <article>
                    <Slider apartmentPictures={apartmentDetails.pictures} />
                    <div className="top">
                        <div className="topone">
                            <div className="topone__titles">
                                <h1>{apartmentDetails.title}</h1>
                                <h2>{apartmentDetails.location}</h2>
                            </div>
                            <Tags tagList={apartmentDetails.tags} />
                        </div>
                        <div className="toptwo">
                            <Rate value={apartmentDetails.rating} />
                            <div className="toptwo__host">
                                <p>{apartmentDetails.host.name}</p>
                                <div className="toptwo__host__picture">
                                    <img
                                        src={apartmentDetails.host.picture}
                                        alt={apartmentDetails.host.name}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <Collapse
                            title="Description"
                            content={apartmentDetails.description}
                        />
                        <Collapse
                            title="Equipements"
                            content={apartmentDetails.equipments}
                        />
                    </div>
                </article>
            )}
        </div>
    )
}
