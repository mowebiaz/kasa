import { useNavigate, useParams } from 'react-router-dom'
import { Error } from './Error'
import { useEffect, useState } from 'react'
import { Slider } from '../components/Slider'
import { Collapse } from '../components/Collapse'
import { Rate } from '../components/Rate'

/**
 * Renders the details of an apartment based on the provided ID.
 *
 */
export function Apartment() {
    const { apartmentId } = useParams()
    const navigate = useNavigate()

    const [apartmentDetails, setApartmentDetails] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchApartmentDetails() {
            setLoading(true)
            try {
                const response = await fetch('/data/logements.json')
                const result = await response.json()
                const apartmentMatch = result.find(
                    (object) => object.id === apartmentId
                )
                if (apartmentMatch) {
                    /* à revoir */
                    setApartmentDetails(apartmentMatch)
                } else {
                    setError(true)
                }
            } catch (err) {
                console.log('===error===', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchApartmentDetails()
    }, [apartmentId])

    if (error) {
        return <Error />
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
                            <div className="topone__tags">tags</div>
                        </div>
                        <div className="toptwo">
                            <Rate value={apartmentDetails.rating} />
                            <div className="toptwo__host">
                                <p>{apartmentDetails.host.name}</p>
                                <div className="toptwo__host__picture">
                                    <img
                                        src={apartmentDetails.host.picture}
                                        alt=""
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
