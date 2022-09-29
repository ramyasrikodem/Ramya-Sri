const express = require('express')

const mongoose = require('mongoose')
const url = 'mongodb://localhost/boooksDB'
const bodyParser = require('bodyParser')
const cors = require('cors')

const app = express()

mongoose.connect(url)
const con = mongoose.connection
con.on('open', () => {
    console.log("database  connected")
})
app.listen(9000, () => {
    console.log("server started")
})