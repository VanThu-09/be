require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || 'localhost'
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const mysql = require('mysql2')

app.use(morgan('combined'))
app.use('/', webRoute)
configViewEngine(app)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: '123456',
    database: 'hoidanit',
});
connection.query(
    'select * from Users u;',
    function (err, results, fields) {
        console.log(">>>>results = ", results);
        console.log(">>>>fields = ", fields);
    }
)