import {
  ADD_FAVORITE_CHARACTER,
  REMOVE_FAVORITE_CHARACTER,
  FILTER,
  ASCENDING_ORDER,
  DESCENDING_ORDER,
  GET_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: [...payload],
        allCharacters: [...payload]
      }
    case ADD_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].filter(
          (char) => char.id !== payload
        ),
        allCharacters: [...state.allCharacters].filter(
          (char) => char.id !== payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter(
          (char) => char.gender.toLowerCase() === payload
        ),
      };
    case ASCENDING_ORDER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].sort(
          (char1, char2) => char1.id - char2.id
        ),
      };
    case DESCENDING_ORDER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].sort(
          (char1, char2) => char2.id - char1.id
        ),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
