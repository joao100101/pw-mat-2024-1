import React from 'react'
import TopBar from './components/TopBar'

const Home = () => {
    const routes = [
        {id: 1, title: "Exercício 01", path: '/exercicio-01'},
        {id: 2, title: "Exercício 02", path: '/exercicio-02'}
    ]
  return (
    <>
        <TopBar routes={routes}/>
        <p>Clique em um dos <em>links</em> acima para selecionar um exercício.</p>
    </>
  )
}

export default Home