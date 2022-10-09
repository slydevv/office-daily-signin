require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const path = require('path')


const app = express()

// app middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());





if(process.env.NODE_ENV === 'production'){

    app.use(express.static(path.resolve(__dirname, "./client-side/build")))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, './client-side/build', 'index.html'))
    })
}

app.use('/api/auth', userRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('connected to database');
    app.listen(process.env.PORT,  () => {
        console.log(`port now running on ${process.env.PORT}`)
    })
}).catch((error) => {console.log(error)})
 
