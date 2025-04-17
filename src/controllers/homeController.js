const connection = require('../config/db')

let users = []
const getHomePage = (req, res) => {
    return res.render('home.ejs')
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
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
        [email, name, city]
    )
    console.log(">>>>results = ", results);
    res.send("Create new user succeed")
}

module.exports = {
    getHomePage, get1, postCreateUser, getCreate
}