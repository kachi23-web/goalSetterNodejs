const express = require ('express')
const mongoose  = require('mongoose')  
const Goal = require('./models/goalModel')

const colors= require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { required } = require('nodemon/lib/config')
const port = process.env.PORT || 8000

connectDB()
const app = express()
// for error handling
app.use(express.json())
app.use(express.urlencoded({extended:false }))
app.use('/api/goals', require('./routes/goalRoutes'))

//route
// app.get('/api/goals',(req,res) => {
//     res.status(200).j  son({message:"Get goals"})
     
// })
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))