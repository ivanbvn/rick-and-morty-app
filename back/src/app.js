const bodyParser = require('body-parser');
const express = require('express');
const getCharById = require('./controllers/getCharById');
const getCharDetail = require('./controllers/getCharDetail');
const app = express()

const favorites = []

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get('/rickandmorty/character/:id', async (req, res) => {
  try {
    const { id } = req.params
    const character = await getCharById(id)
    res.json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
app.get('/rickandmorty/character/detail/:detailId', async (req, res) => {
  try {
    const { detailId } = req.params
    const character = await getCharDetail(detailId)
    res.json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
app.get('/rickandmorty/fav', (req, res) => {
  res.json(favorites)
})
app.post('/rickandmorty/fav', (req, res) => {
  try {
    const { id, name, species, gender, image } = req.body
    const newFav = { id, name, species, gender, image }
    favorites.push(newFav)
    res.json(newFav)
  } catch (error) {
    res.status(400).json({ error: 'Error al favear el personaje' })
  }
})
app.delete('/rickandmorty/fav', (req, res) => {
  try {
    const { id } = req.body
    let deletedFav
    favorites.forEach((fav, index) => {
      if (fav.id == id) {
        deletedFav = favorites.splice(index, 1)
      }
    })
    if (deletedFav) return res.json(...deletedFav)
    throw Error('No se encontró el personaje con ese ID')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = { app }