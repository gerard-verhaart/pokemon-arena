const express = require('express')
const hbs = require('express-handlebars')
const fs = require('node:fs/promises')
const ownerRoute = require('./owner-routes.js')
const pokemonRoute = require('./pokemon-routes.js')

const server = express()
<<<<<<< HEAD
server.use('/owner', ownerRoute)
=======
server.use('/owner/', ownerRoute)
server.use('/pokemon/', pokemonRoute)
>>>>>>> 7286078a44acc74b27f9a3c7b0f86c7c7a884770

// Server configuration
const publicFolder = __dirname + '/public'
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Your routes/router(s) should go here
server.get('/', (req, res) => {
  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((data) => {
      res.render('home', JSON.parse(data))
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = server

TEST
