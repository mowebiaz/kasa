import './home.scss'
import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner/Banner'
import { Card } from '../../components/Card/Card'
import homeBannerImage from '../../assets/images/homebanner.png'

export function Home() {
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

  if (error) {
    return <p>Impossible de charger la liste des appartements</p>
  }

  return (
    <main className="home">
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
    </main>
  )
}
