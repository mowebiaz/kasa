import { useParams } from 'react-router-dom'
import apartmentsList from '../data/apartments.json'
import { Error } from './Error'
import { useEffect, useState } from 'react'

/**
 * Renders the details of an apartment based on the provided ID.
 *
 * @return {JSX.Element} The JSX element containing the apartment details.
 */
export function Apartment() {
    const { apartmentId } = useParams()

    const apartmentMatch = apartmentsList.find(
        (object) => object.id === apartmentId
    )

    if (!apartmentMatch) {
        return <p>Impossible de récupérer les données</p>
    }

    return (
        <div>
            <p>
                L'appartement concerné a les propriété suivantes: son id est
                {apartmentMatch.id}, son titre est {apartmentMatch.title}
                et il a comme image de couverture:
                <img src={apartmentMatch.cover} alt="cover"></img>
            </p>
        </div>
    )
}
