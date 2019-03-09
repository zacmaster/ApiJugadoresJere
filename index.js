const mongoose = require('mongoose')
const express = require('express')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')




const user = 'root'
const pass = 'root1234'
const url = `mongodb://${user}:${pass}@ds159926.mlab.com:59926/jugadores`



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())
app.use(logger('dev'))



mongoose.connect(url, {useNewUrlParser: true})
require('./models/player')
require('./routers/player')(app)


const port = process.env.PORT || 80

app.listen(port,() =>{
    console.log(`Server running on  http://localhost:${port}/jugadores`)
})