import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = ({ routes }) => {

    console.log(routes)
    return (
        <>
            <h1>Exercícios React Hook</h1>
            <ul>
                {
                    routes.forEach(route => {
                        <li key={route.id}><Link to={route.path}>{route.title}</Link></li>
                    })
                }
            </ul>
            <hr />
        </>
    )
}

export default TopBar