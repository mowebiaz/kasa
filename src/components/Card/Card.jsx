import { useNavigate } from 'react-router-dom'

/**
 * Renders a card component for a given apartment.
 *
 * @param {Object} apartment - The apartment object containing details.
 */
export function Card({ apartment }) {
    const navigate = useNavigate()

    return (
        <div
            className="card"
            onClick={() => {
                navigate(`/apartment/${apartment.id}`)
            }}
        >
            <div className="card__overlay"></div>
            <img src={apartment.cover} alt={apartment.title} />
            <div className="card__title">{apartment.title}</div>
        </div>
    )
}
