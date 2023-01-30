import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GifContainer, CharacterContainer, CharacterImg, CharacterInfo, CharacterInfoContainer, CharacterName, ComponentContainer } from './DetailStyles'

const Detail = () => {

  const [character, setCharacter] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { detailId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    try {
     fetch(`http://localhost:3001/rickandmorty/character/detail/${detailId}`)
        .then(response => response.json())
        .then(data => {
          if (data.name) {
            setCharacter(data)
            setIsLoading(false)
          } else {
            window.alert('No hay personajes con ese ID')
          }
        })
    } catch (error) {
      throw new Error(error)
    }
    return setCharacter({})
  }, [detailId])

  const pageBack = () => {
    navigate(-1)
  }

  return (
    <ComponentContainer>
      {
        isLoading
          ? <GifContainer><img src="https://64.media.tumblr.com/6e8de091d785f87057470a423b70246b/d90fb957170ed534-d4/s640x960/5b433700d0ab3d09ac3c8156cc5749b12129346d.gifv" alt="" /></GifContainer>
          : <CharacterContainer>
            <div>
              <button onClick={pageBack}>Back</button>
            </div>
            <CharacterName>
              <h1>{character.name}</h1>
            </CharacterName>
            <CharacterInfoContainer>
              <CharacterInfo>
                <span><strong>Status: </strong>{character.status}</span>
                <span><strong>Species: </strong>{character.species}</span>
                <span><strong>Gender: </strong>{character.gender}</span>
                <span><strong>Origin: </strong>{character.origin?.name}</span>
              </CharacterInfo>
              <CharacterImg>
                <img src={character.image} alt={character.name} />
              </CharacterImg>
            </CharacterInfoContainer>
          </CharacterContainer>
      }
    </ComponentContainer>
  )
}

export default Detail