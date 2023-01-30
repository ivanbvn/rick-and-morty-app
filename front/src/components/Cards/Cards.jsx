import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFavorite, getFavorites, removeFavorite } from "../../redux/actions";
import {
  CardName,
  CharacterCard,
  CharacterCardContainer,
  ClickedFavoriteButton,
  CloseButton,
  InfoText,
  NameAndSpecie,
  UnclickedFavoriteButton,
} from "./CardsStyles";

function Cards(props) {
  const { characters, onClose, addFavorite, removeFavorite, myFavorites } = props;
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(characters));
    dispatch(getFavorites())
  }, [characters]);

  const CardItem = ({ character }) => {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
      myFavorites.forEach(
        (favorite) => favorite.id === character.id && setIsFav(true)
      );
    }, [myFavorites]);

    const handleFavorite = (character) => {
      if (isFav) {
        setIsFav(false);
        removeFavorite(character.id);
      } else {
        setIsFav(true);
        addFavorite(character);
      }
    };
    const handleDeleteCharacter = (event, id) => {
      onClose(event);
      removeFavorite(id);
    };

    return (
      <>
        {isFav ? (
          <ClickedFavoriteButton onClick={() => handleFavorite(character)}>
            <div>❤️</div>
          </ClickedFavoriteButton>
        ) : (
          <UnclickedFavoriteButton onClick={() => handleFavorite(character)}>
            <div>🤍</div>
          </UnclickedFavoriteButton>
        )}
        <CloseButton
          onClick={(event) => handleDeleteCharacter(event, character.id)}
          id={character.id}
        >
          X
        </CloseButton>
        <NavLink
          to={`/detail/${character.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <img src={character.image} alt={character.name} />
          <CardName>{character.name}</CardName>
          <NameAndSpecie>
            <InfoText>
              <strong>Species:</strong> {character.species}
            </InfoText>
            <InfoText>
              <strong>Gender:</strong> {character.gender}
            </InfoText>
          </NameAndSpecie>
        </NavLink>
      </>
    );
  };

  return (
    <CharacterCardContainer>
      {characters.map((character) => {
        return (
          <CharacterCard key={character.id}>
            <CardItem character={character} />
          </CharacterCard>
        );
      })}
    </CharacterCardContainer>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
    getFavorite: () => dispatch(getFavorites())
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
