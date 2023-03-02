const express = require('express')
const router = express.Router()
const fs = require('node:fs/promises')

console.log('this pokemon route is working')

router.get('/:id', (req, res) => {
  const idNumber = Number(req.params.id)
  console.log(idNumber)

  fs.readFile(__dirname + '/data.json', 'utf-8')

    .then((data) => {
      const parsedInfo = JSON.parse(data)
      const pokeMatch = parsedInfo.pokemon.find(
        (element) => element.id === idNumber
      )
      res.render('pokemon-profile', pokeMatch)
    })

    .catch((err) => {
      res.status(404).send(err.message)
    })
})

// router.get - for edit function

module.exports = router
