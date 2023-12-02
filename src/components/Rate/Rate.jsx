import { ReactComponent as Star } from '../../assets/icons/star.svg'

/**
 * Generates a star rating component based on the given value.
 *
 * @param {object} value - The value used to determine the number of active stars.
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
