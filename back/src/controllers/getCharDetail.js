const axios = require("axios");

const getCharDetail = async (id) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return {
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      image: data.image
    }
  } catch (error) {
    throw Error(error)
  }
};

module.exports = getCharDetail;
