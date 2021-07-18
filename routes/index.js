const express = require('express')
const router = express.Router()
    // const productData = require('../public/data/products.json')

router.get('/', (req, res) => {
    res.status(200)
    res.render('index')
})

//ke login
router.get('/login', (req, res) => {
    res.status(200)
    res.render('login')
})

//post hasil login 
router.post('/login', (req, res, next) => {
    const { username = '', password = '' } = req.body
    if (!username || !password) {
        let err = new Error(`Field cannot be empty`);
        err.statusCode = 001;
        err.shouldRedirect = true
        next(err);
    } else {
        res.status(200)
        res.redirect('/')
    }
})
module.exports = router