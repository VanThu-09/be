const connection = require('../config/db');
const getAllUsers = async (req, res) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users;`)
    return results
}

const getUserById = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userID])
    let user = results && results.length > 0 ? results[0] : {}  
    return user
}
const updateUserById = async (email, city, name, userID) => {
    let [results, fields] = await connection.query(
        ` UPDATE Users 
         SET email = ?, city = ?, name = ? 
         WHERE id = ? `, [email, city, name, userID]
    )
}
const deleteUserById = async (userID) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?;`, [userID]
    )
}

module.exports = {
    getAllUsers, 
    getUserById,
    updateUserById,
    deleteUserById
};