const express = require('express')
const router = express.Router()

//ke games
router.get('/', (req, res) => {
    res.status(200)
    res.render('games')
})

module.exports = router