const express = require('express')
const hbs = require('express-handlebars')
const fs = require('node:fs/promises')
const ownerRoute = require('./owner-routes.js')

const server = express()
server.use('/owner', ownerRoute)

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
