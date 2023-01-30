const axios = require("axios");

const getCharById = async (id) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image
    }
  } catch (error) {
    throw Error(error)
  }
}

module.exports = getCharById;
