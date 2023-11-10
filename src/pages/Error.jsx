import { useNavigate } from 'react-router-dom'
import React from 'react'

export function Error() {
    const navigate = useNavigate()
    return (
        <div className="error container">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p onClick={() => navigate('')}>Retourner sur la page d’accueil</p>
        </div>
    )
}
