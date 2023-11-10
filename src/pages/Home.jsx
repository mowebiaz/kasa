import { Banner } from '../components/Banner'
import { Card } from '../components/card'
import { useEffect, useState } from 'react'

export function Home() {
    const [apartmentsList, setApartmentsList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchApartments() {
            setLoading(true)
            try {
                const response = await fetch('../data/logements.json')
                const result = await response.json()
                setApartmentsList(result)
            } catch (err) {
                console.log('===error===', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchApartments()
    }, [])

    if (error) {
        return <p>Impossible de charger la liste des appartements</p>
    }

    return (
        <div className="home container">
            <Banner />
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
