const express = require('express')
const router = express.Router()
const mythData = require('../data/myth.json')

router.get('/', (req, res) => {
    res.json(mythData)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const found = mythData.find((myth) => myth.id === Number(id))
    res.json(found)
})

module.exports = router