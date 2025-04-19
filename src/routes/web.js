const express = require('express')
const { getHomePage, get1, postCreateUser, getCreate, getUpdateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/1', get1)
router.get('/create', getCreate)
router.post('/create-user',postCreateUser)
router.get('/update/:id', getUpdateUser)
router.post('/update-user',postUpdateUser)
router.post('/delete-user/:id',postDeleteUser)
router.post('/delete-user',postHandleRemoveUser)


module.exports = router