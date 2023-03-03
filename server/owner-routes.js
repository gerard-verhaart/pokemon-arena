const express = require('express')
const router = express.Router()
// const hbs = require('express-handlebars')
const fs = require('node:fs/promises')

console.log('this owner route is working')

router.get('/:id', (req, res) => {
  const idNumber = Number(req.params.id)

  console.log(idNumber)

  fs.readFile(__dirname + '/data/data.json', 'utf-8')

    .then((data) => {
      const parsedInfo = JSON.parse(data)
      const ownerMatch = parsedInfo.owners.find(
        (element) => element.id === idNumber
      )
      ownerMatch.pokemon = []
      ownerMatch.pokemon = parsedInfo.pokemon.filter(
        (el) => el.ownerid === idNumber
      )

      res.render('owner-profile', ownerMatch)
    })

    .catch((err) => {
      res.status(404).send(err.message)
    })
})

// router.get - for edit function

module.exports = router
