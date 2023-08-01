const express = require('express')
const router = express.Router()
const fs = require('node:fs/promises')

// console.log('this pokemon route is working')
// router.get - for edit function
router.get('/:id/edit', (req, res) => {
  const idNumber = Number(req.params.id)
  // console.log(idNumber)
  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((data) => {
      const parsedInfo = JSON.parse(data)
      const pokeMatch = parsedInfo.pokemon.find(
        (element) => element.id === idNumber
      )
      pokeMatch.owner = parsedInfo.owners.find(
        (el) => el.id === pokeMatch.ownerid
      )
      pokeMatch.owners = parsedInfo.owners
      res.render('pokemon-edit', pokeMatch)
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

// /pokemon/{{id}}/edit
// router.post - for edit function
router.post('/:id/edit', (req, res) => {
  const idNumber = Number(req.params.id)

  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((data) => {
      const parsedInfo = JSON.parse(data)
      const pokeMatch = parsedInfo.pokemon.find(
        (element) => element.id === idNumber
      )
      pokeMatch.owner = parsedInfo.owners.find(
        (el) => el.id === pokeMatch.ownerid
      )
      pokeMatch.owners = parsedInfo.owners

      const { name, species, height, weight, popularity, power } = req.body

      pokeMatch.name = name
      pokeMatch.species = species
      pokeMatch.height = height
      pokeMatch.weight = weight
      pokeMatch.popularity = popularity
      pokeMatch.power = power

      const unParsedData = JSON.stringify(parsedInfo, null, 2)
      fs.writeFile(__dirname + '/data/data.json', unParsedData)
        .then(() => {
          res.redirect('/pokemon/' + idNumber)
        })
        .catch((err) => {
          res.status(500).send(err.message)
        })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const idNumber = Number(req.params.id)
  // console.log(idNumber)

  fs.readFile(__dirname + '/data/data.json', 'utf-8')
    .then((data) => {
      const parsedInfo = JSON.parse(data)
      const pokeMatch = parsedInfo.pokemon.find(
        (element) => element.id === idNumber
      )
      pokeMatch.owner = parsedInfo.owners.find(
        (el) => el.id === pokeMatch.ownerid
      )
      res.render('pokemon-profile', pokeMatch)
    })

    .catch((err) => {
      res.status(404).send(err.message)
    })
})

module.exports = router
