import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CardName,
  CharacterCard,
  InfoText,
  NameAndSpecie,
} from "../Cards/CardsStyles";
import { ComponentContainer, SelectContainer } from "./FavoritesStyles";
import { filterCards, getFavorites, orderCards } from "../../redux/actions";

export const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFavorites())
  }, [])
  
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleGenderFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <SelectContainer>
        <div>
          <select name="order" onChange={handleOrder}>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </div>
        <div>
          <select name="filter" onChange={handleGenderFilter}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </SelectContainer>
      <ComponentContainer>
        {myFavorites.map((fav) => {
          return (
            <CharacterCard key={fav.id}>
              <NavLink
                to={`/detail/${fav.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img src={fav.image} alt={fav.name} />
                <CardName>{fav.name}</CardName>
                <NameAndSpecie>
                  <InfoText>
                    <strong>Species:</strong> {fav.species}
                  </InfoText>
                  <InfoText>
                    <strong>Gender:</strong> {fav.gender}
                  </InfoText>
                </NameAndSpecie>
              </NavLink>
            </CharacterCard>
          );
        })}
      </ComponentContainer>
    </div>
  );
};

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
