import './apartment.scss'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Slider } from '../../components/Slider/Slider'
import { Collapse } from '../../components/Collapse/Collapse'
import { Rate } from '../../components/Rate/Rate'
import { Tags } from '../../components/Tags/Tags'

/**
 * Renders the details of an apartment based on the apartmentId.
 *
 * @param {string} apartmentId - The unique identifier of the apartment.
 */
export function Apartment() {
  const { apartmentId } = useParams()
  const [apartmentDetails, setApartmentDetails] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchApartmentDetails() {
      setLoading(true)
      try {
        const response = await fetch('/data/logements.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        const result = await response.json()
        const apartmentMatch = result.find(
          (object) => object.id === apartmentId
        )
        if (apartmentMatch) {
          setApartmentDetails(apartmentMatch)
          /* if no match found: id doesn't exist in the list of apartments */
        } else {
          setError(true)
        }
        /* if error during the HTTP request */
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchApartmentDetails()
  }, [apartmentId])

  if (error) {
    return <Navigate to="/404" />
  }

  return (
    <main className="apartment">
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
    </main>
  )
}
