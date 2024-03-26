import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = ({children}) => {

    return (
        <>
            <h1>Exercícios React Hook</h1>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/exercicio-01">
                        Exercício 01
                    </Link>
                </li>
                <li>
                    <Link to="/exercicio-02">
                        Exercício 02
                    </Link>
                </li>
                <li>
                    <Link to="/exercicio-03">
                        Exercício 03
                    </Link>
                </li>
            </ul>
            <p>Clique em um dos <em>links</em> acima para selecionar um exercício.</p>
            <hr />
            {children}
        </>
    )
}

export default TopBar