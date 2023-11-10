import { useParams } from 'react-router-dom'
import { Error } from './Error'
import { useEffect, useState } from 'react'

/**
 * Renders the details of an apartment based on the provided ID.
 *
 * @return {JSX.Element} The JSX element containing the apartment details.
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
                const response = await fetch('../data/logements.json')
                const result = await response.json()
                const apartmentMatch = result.find(
                    (object) => object.id === apartmentId
                )
                setApartmentDetails(apartmentMatch)
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
        return <p>Impossible de charger le détail de l'appartements</p>
    }

    return (
        <div>
            {isLoading ? (
                <p>Chargement en cours</p>
            ) : (
                <>
                    <p>
                        l'ID de l'appartement est {apartmentDetails.id} et son
                        titre est {apartmentDetails.title} et son image de
                        couverture est
                    </p>
                    <img src={apartmentDetails.cover} alt="cover" />
                </>
            )}
        </div>
    )
}
