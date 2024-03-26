import * as React from 'react'


function Greeting({ initialName = '' }) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState()





  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    setName(localStorage.getItem('name') ?? initialName)
    console.count("leu localstorage")
  }, [])

  React.useEffect(() => {
    if (name != undefined) {
      console.count("Atualizado")
      localStorage.setItem('name', name)
    }
  }, [name])

  const labelClick = (e) =>{
    e.target.innerHTML += "*"
  }

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name" onClick={labelClick}>Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting />
}

export default Exercicio02