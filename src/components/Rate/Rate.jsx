import './rate.scss'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

/**
 * Renders a rating component based on the provided value.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.value - The rating value.
 */
export function Rate({ value }) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    const starClass = i <= value ? 'star__active' : 'star__inactive'
    stars.push(
      <span key={i} className={starClass}>
        <Star />
      </span>
    )
  }

  return <div className="rate">{stars}</div>
}
