import { useNavigate } from 'react-router-dom'

export function Card({ apartment }) {
    const navigate = useNavigate()

    return (
        <div
            className="card"
            onClick={() => {
                navigate(`apartment/${apartment.id}`)
            }}
        >
            <img src={apartment.cover} alt="cover" />
            <div className="card__title">{apartment.title}</div>
        </div>
    )
}
