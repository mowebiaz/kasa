import { useParams } from 'react-router-dom'
import { Error } from './Error'
import { useEffect, useState } from 'react'
import { Slider } from '../components/slider'

/**
 * Renders the details of an apartment based on the provided ID.
 *
 */
export function Apartment() {
    const { apartmentId } = useParams()

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
                    /*return <Error />*/
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
        <div>
            {isLoading ? (
                <p>Chargement en cours</p>
            ) : (
                <>
                    <Slider apartmentPictures={apartmentDetails.pictures} />
                    <p>
                        l'ID de l'appartement est {apartmentDetails.id} et son
                        titre est {apartmentDetails.title}
                    </p>
                </>
            )}
        </div>
    )
}
