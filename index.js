require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const todoRoute = require('./routes/todo')
const mongoose = require('mongoose')
app.use(cors())
app.use(bodyParser.json())
const URI=process.env.URI;
app.use('/todos', todoRoute)
mongoose.connect(URI).then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})
app.listen(5000)