import { ReactComponent as Star } from '../assets/icons/star.svg'

export function Rate({ value }) {
    const stars = []

    for (let i = 1; i <= 5; i++) {
        const starClass = i <= value ? 'star__active' : 'star__inactive'
        stars.push(
            <span key={i} className={starClass}>
                {<Star />}
            </span>
        )
    }

    return <div className="toptwo__rate">{stars}</div>
}
