import { useState } from 'react'
import Card  from './Card'
import styles from './styles/app.css'

function App() {

  const [submitted, setSubmitted] = useState()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [favAnimal, setFavAnimal] = useState('')
  const [typePet, setTypePet] = useState('')
  const [fanDogs, setFanDogs] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const valFavName = favAnimal.match(/^[^\s]*[A-Za-z0-9]{3}$/);
    const valName = name.match(/^[A-Za-z0-9]{6}$/);
    if(!valFavName || !valName) {
      setError('Por favor chequea que la información sea correcta');
      return
    }

    const petData = {
      name,
      favAnimal,
      typePet,
      fanDogs,
    }
    setSubmitted(petData)
    setName('')
    setFavAnimal('')
    setTypePet('')
    setFanDogs(false)
    setError('')
    console.log(petData)
  }

  return (
    <div className="app">
      <h1>Encuesta MascotApp</h1>
      <form onSubmit={handleSubmit} className="form">{/* aqui deberias escribir tu codigo */}
      <label htmlFor='name'>¿Cual es tu animal favorito?</label>
      <input
            type='text'
            name='favAnimal'
            value={favAnimal}
            onChange={(e) => setFavAnimal(e.target.value)}
          />
      <label htmlFor="">¿Cual es el nombre de tu primera mascota?</label>
        <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      <label htmlFor="">¿Que animal fue tu ultima mascota?</label>
      <input
          type='text'
          name='typePet'
          value={typePet}
          onChange={(e) => setTypePet(e.target.value)}
        />
      <label htmlFor="">¿Eres fan de los perros?</label>
      <input
          className="checkbox"
          type='checkbox'
          name='fanDogs'
          checked={fanDogs}
          onChange={(e) => setFanDogs(e.target.checked)}
        />
        <button type='submit'>Send Pet Form</button>
      </form>
      {error && <p>{error}</p>}
      { submitted && <Card data={submitted}/> }
    </div>
  );
}

export default App;
