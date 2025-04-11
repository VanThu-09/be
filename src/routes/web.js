const express = require('express')
const {getHomePage, get1} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/1', get1)

module.exports = router