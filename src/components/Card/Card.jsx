import './card.scss'
import { Link } from 'react-router-dom'

/**
 * Renders a card component for a given apartment.
 *
 * @param {Object} apartment - The apartment object containing details.
 */
export function Card({ apartment }) {
  return (
    <div className="card">
      <Link to={`/apartment/${apartment.id}`}>
        <div className="card__overlay"></div>
        <img src={apartment.cover} alt={apartment.title} />
        <div className="card__title">{apartment.title}</div>
      </Link>
    </div>
  )
}
