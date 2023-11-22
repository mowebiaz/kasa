import { useEffect, useState } from 'react'
export function FetchApartmentsList() {
    const [apartmentsList, setApartmentsList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchApartments() {
            setLoading(true)
            try {
                const response = await fetch('/data/logements.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                })
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

    return { isLoading, apartmentsList, error }
}
