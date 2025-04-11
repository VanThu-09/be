require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOSTNAME || 'localhost'
const configViewEngine = require('./config/viewEngine')
const webRoute = require('./routes/web')


app.use(morgan('combined'))
app.use('/2', webRoute)
configViewEngine(app)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})