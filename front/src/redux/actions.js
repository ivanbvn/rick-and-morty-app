import axios from 'axios'

export const GET_FAVORITES = 'GET_FAVORITES'
export const ADD_FAVORITE_CHARACTER = 'ADD_FAVORITE_CHARACTER'
export const REMOVE_FAVORITE_CHARACTER = 'REMOVE_FAVORITE_CHARACTER'
export const FILTER = 'FILTER'
export const ASCENDING_ORDER = 'ASCENDING_ORDER'
export const DESCENDING_ORDER = 'DESCENDING_ORDER'

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios({
        method: 'get',
        url: `http://localhost:3001/rickandmorty/fav`
      })
      return dispatch({
        type: GET_FAVORITES,
        payload: data
      })
    } catch (error) {
      throw Error(error.message)
    }
  }
}
export const addFavorite = (character) => {
  return async function (dispatch) {
    try {
      const { data } = await axios({
        method: 'post',
        url: `http://localhost:3001/rickandmorty/fav`,
        data: {
          id: character.id,
          name: character.name,
          gender: character.gender,
          species: character.species,
          image: character.image
        }
      })
      return dispatch({
        type: ADD_FAVORITE_CHARACTER,
        payload: data
      })
    } catch (error) {
      throw Error(error.message)
    }
  }
}
export const removeFavorite = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios({
        method: 'delete',
        url: `http://localhost:3001/rickandmorty/fav`,
        data: {
          id: id.toString()
        }
      })
      return dispatch({
        type: REMOVE_FAVORITE_CHARACTER,
        payload: data.id
      })  
    } catch (error) {
      throw Error(error.message)
    }
  }
};
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }
}
export const orderCards = (orderType) => {
  if (orderType === 'ascendente') {
    return {
      type: ASCENDING_ORDER,
    }
  } else if (orderType === 'descendente') {
    return {
      type: DESCENDING_ORDER
    }
  }
}