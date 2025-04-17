require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || 'localhost'
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')
const connection = require('./config/db')
app.use(morgan('combined'))

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.use('/', webRoute)
configViewEngine(app)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})


// connection.query(
//     'select * from Users u;',
//     function (err, results, fields) {
//         console.log(">>>>results = ", results);
//     }
// )