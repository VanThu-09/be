const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World! voi van')
})

router.get('/1', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router