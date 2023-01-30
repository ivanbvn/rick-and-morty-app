import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { Button, Container, NavBar, FirstContainer } from "./NavStyles"
// import About from "../About/About"
import Cards from "../Cards/Cards"
import About from "../About/About"
import Favorites from "../Favorites/Favorites"
import { useState } from "react"
import { useEffect } from "react"

export const Nav = (props) => {

  const { onSearch, onRandomCharacter, logout } = props
  const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('pages')) || {})

  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(isActive))
  }, [isActive])
  

  const handleIsActive = (event) => {
    setIsActive({
      about: false,
      home: false,
      favorites: false,
      [event.target.id]: true
    })
  }

  return (
    <NavBar>
      <FirstContainer>
        <Button
          id="logout"
          onClick={logout}
          className='logout'
        >
          Logout
        </Button>
        <NavLink to='home' element={<Cards />}>
          <Button
            id="home"
            onClick={handleIsActive}
          // className={isActive.home && 'active'}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to='about' element={<About />}>
          <Button
            id="about"
            onClick={handleIsActive}
            className={isActive.about && 'active'}
          >
            About
          </Button>
        </NavLink>
        <NavLink to='favorites' element={<Favorites />}>
          <Button
            id="favorites"
            onClick={handleIsActive}
            className={isActive.favorites && 'active'}
          >
            Favorites
          </Button>
        </NavLink>
      </FirstContainer>
      <Container>
        <SearchBar
          onSearch={onSearch}
          onRandomCharacter={onRandomCharacter}
        />
      </Container>
    </NavBar>
  )
}
