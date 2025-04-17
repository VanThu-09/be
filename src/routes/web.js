const express = require('express')
const { getHomePage, get1, postCreateUser, getCreate} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/1', get1)
router.get('/create', getCreate)
router.post('/create-user',postCreateUser)
module.exports = router