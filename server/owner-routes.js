const express = require('express')
const hbs = require
const fs = require('node:fs/promises')
const { dirname } = require('node:path')

const router = express.Router()

router.get('/:id', (req, res) => {
  const idNumber = Number(req.params.id)
  console.log(idNumber)

  fs.readFile (__dirname + '/data.json', 'utf-8')

    .then ((data) => {
      const parsedInfo = JSON.parse(data)
      const pokeMatch = parsedInfo.owners.find((element) => element.id === idNumber)
      res.render('owner-profile', pokeMatch)
    })
  
    .catch ((err) => {
      res.status(404).send(err.message)
    })
  })


    // router.get - for edit function


















module.exports = router


.then((data) => {
  const parsedData = JSON.parse(data)
  console.log(parsedData)
  const idMatchValue = parsedData.puppies.find(
    (element) => element.id === idNumber
  )
  console.log(idMatchValue)
  res.render('details', idMatchValue)
})
.catch((err) => {
  res.status(404).send(err.message)
})