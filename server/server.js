const express = require('express')
const hbs = require('express-handlebars')
// const fs = require('node:fs/promises')

const server = express()

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
  res.render('home')
})

module.exports = server
