const express = require('express')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const path = require('path')


//routing ngarah ke data
const home = require('./routes/index')
const games = require('./routes/games')
const myth = require('./routes/myth')

//application middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "/public")));




//routing middleware
app.use('/', home)
app.use('/games', games)
app.use('/myth', myth)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})