const connection = require('../config/db')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDservices')

let users = []
const getHomePage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home.ejs', { dataUser: results })
}
const get1 = (req, res) => {
    res.render('sample.ejs')
}

const getCreate = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]
    )
    console.log(">>>>results = ", results);
    res.send("Create new user succeed")
}

const getUpdateUser = async (req, res) => {
    const userID = req.params.id
    let user = await getUserById(userID)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let { userID, email, city, name } = req.body
    await updateUserById(email, city, name, userID)
    res.redirect('/')
}
const postDeleteUser = async (req, res) => {
    const userID = req.params.id
    let user = await getUserById(userID)
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const userID = req.body.userID
    await deleteUserById(userID)
    res.redirect('/')
}
module.exports = {
    getHomePage, get1, postCreateUser, getCreate, getUpdateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser
}