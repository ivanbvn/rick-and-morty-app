import { useEffect, useState } from 'react'
import './App.css'
import { Nav } from "./components/Nav/Nav"
import Cards from "./components/Cards/Cards"
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'

function App() {

  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem('characters')) || [])
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || false)
  const username = 'admin@test.com'
  const password = '1234567'

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home')
      localStorage.setItem('access', true)
    }
  }
  const logout = () => {
    localStorage.removeItem('access')
    setAccess(false)
  }
  const onSearch = (id) => {
    if (!Number(id)) return
    if (Number(id) <= 0) return
    if (characters.some((character) => character.id === Number(id))) return

    try {
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then((newCharacter) => {
          if (newCharacter.name) return setCharacters((oldCharacters) => [...oldCharacters, newCharacter])
          window.alert('No hay personajes con ese ID')
        })
    } catch (error) {
      throw new Error(error)
    }
  }

  const onClose = (event) => {
    const id = Number(event.target.id)
    setCharacters(characters.filter((character) => character.id !== id))
  }

  const onRandomCharacter = () => {
    const randomNumber = (Math.ceil(Math.random() * 826)).toString()
    if (characters.some(character => character.id === Number(randomNumber))) return onRandomCharacter()
    onSearch(randomNumber)
  }

  return (
    <div className='App' style={{ padding: '25px' }}>

      {pathname !== '/'
        ? <Nav
          onSearch={onSearch}
          onRandomCharacter={onRandomCharacter}
          logout={logout}
        />
        : ''
      }

      <Routes>

        <Route path='/about' element={
          <About />
        } />

        <Route path='/home' element={
          <Cards characters={characters} onClose={onClose} />
        } />

        <Route path='/detail/:detailId' element={<Detail />} />

        <Route path='/error' element={<Error />} />

        <Route path='/*' element={<Navigate to='/error' />} />

        <Route path='/favorites' element={<Favorites />} />

        <Route path='/' element={<Form login={login} />} />

      </Routes>

    </div>
  )
}

export default App
